import { Component, Input } from '@angular/core';

import { AppState } from '../../app.service';
import { FeathersService } from '../../feathers';

@Component({
  selector: 'sg-checkin',
  styles: [
    require('./checkin.component.scss')
  ],
  template: require('./checkin.component.html')
})
class CheckinComponent {
  @Input() private barId: any;
  // private isFetching: boolean = false;
  // private isCheckedIn: boolean = false;

  constructor(
    private feathersService: FeathersService,
    private appState: AppState
  ) {}

  public checkin(): any {
    console.log('barId', this.barId);
    this.feathersService.checkin(this.barId);
  }
}

export { CheckinComponent };
