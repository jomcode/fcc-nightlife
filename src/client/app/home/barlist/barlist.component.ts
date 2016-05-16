import { Component, Input, OnDestroy } from '@angular/core';

import { FeathersService } from '../../feathers';
import { CheckinComponent } from '../checkin';

@Component({
  directives: [ CheckinComponent ],
  selector: 'sg-barlist',
  styles: [
    require('./barlist.component.scss')
  ],
  template: require('./barlist.component.html')
})
class BarListComponent implements OnDestroy {
  private checkinSubscription: any;
  @Input() public bars: Array<any>;

  constructor(private feathersService: FeathersService) {
    //
    this.checkinSubscription = feathersService.checkin$.subscribe(
      (result: any) => console.log('checkinSubscription', result),
      (error: any) => console.error('checkinSubscription', error)
    );
  }

  public ngOnDestroy(): void {
    this.checkinSubscription.unsubscribe();
  }
}

export { BarListComponent };
