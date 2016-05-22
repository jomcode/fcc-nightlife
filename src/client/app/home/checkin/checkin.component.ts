import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppState } from '../../app.service';
import { FeathersService } from '../../feathers';

@Component({
  selector: 'sg-checkin',
  styles: [
    require('./checkin.component.scss')
  ],
  template: require('./checkin.component.html')
})
class CheckinComponent implements OnInit {
  @Input() private barId: any;
  private isCheckedIn: boolean = false;

  constructor(
    private feathersService: FeathersService,
    private appState: AppState,
    private router: Router
  ) {}

  public checkin(): any {
    const { state }: any = this.appState;
    if (!state.credentials.user) return this.router.navigate(['/login']);
    this.feathersService.checkin(this.barId);
  }

  public checkout(): any {
    const { state }: any = this.appState;
    this.feathersService.checkout(state.credentials.user.userId, this.barId);
  }

  public ngOnInit(): void {
    this.getCheckinStatus();
  }

  private getCheckinStatus(): void {
    const { state }: any = this.appState;

    if (state.credentials && state.credentials.user) {
      state.bars.forEach((b: any) => {
        if (this.barId === b.id) {
          b.checkins.forEach((c: any) => {
            if (c.userId === state.credentials.user.id) this.isCheckedIn = true;
          });
        }
      });
    }
  }
}

export { CheckinComponent };
