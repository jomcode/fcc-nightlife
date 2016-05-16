import { Component, Input } from '@angular/core';

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

  constructor(
    private feathersService: FeathersService
  ) {}

  public checkin(): any {
    this.feathersService.checkin(this.barId);
  }
}

export { CheckinComponent };
