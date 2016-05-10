import { Component, Input } from '@angular/core';

@Component({
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
