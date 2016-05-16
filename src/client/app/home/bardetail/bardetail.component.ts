import { Component } from '@angular/core';
import { OnActivate } from '@angular/router';

import { FeathersService } from '../../feathers';
import { AppState } from '../../app.service';

@Component({
  selector: 'sg-bardetail',
  styles: [
    require('./bardetail.component.scss')
  ],
  template: require('./bardetail.component.html')
})
class BarDetailComponent implements OnActivate {
  constructor(
    private feathersService: FeathersService,
    private appState: AppState
  ) {}

  public routerOnActivate(curr: any): void {
    const { parameters: { barId } }: any = curr;
    console.log('routerOnActivate');
    this.getBarDetails(barId);
  }

  private getBarDetails(barId: any): any {
    this.feathersService.getBarDetails(barId);
  }
}

export { BarDetailComponent };
