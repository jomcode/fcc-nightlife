import { Component } from '@angular/core';

@Component({
  selector: 'sg-barlist',
  styles: [
    require('./barlist.component.scss')
  ],
  template: require('./barlist.component.html')
})
class BarListComponent {
  constructor() {
    //
  }
}

export { BarListComponent };
