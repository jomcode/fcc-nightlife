import { Component, Input } from '@angular/core';

import { CheckinComponent } from '../checkin';

@Component({
  directives: [ CheckinComponent ],
  selector: 'sg-barlist',
  styles: [
    require('./barlist.component.scss')
  ],
  template: require('./barlist.component.html')
})
class BarListComponent {
  @Input() public bars: Array<any>;
}

export { BarListComponent };
