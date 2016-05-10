import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  directives: [
    ROUTER_DIRECTIVES
  ],
  selector: 'sg-barlist',
  styles: [
    require('./barlist.component.scss')
  ],
  template: require('./barlist.component.html')
})
class BarListComponent {
  @Input() public bars: Array<any>;

  constructor() {
    //
  }
}

export { BarListComponent };
