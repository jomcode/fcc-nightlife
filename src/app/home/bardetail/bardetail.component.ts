import { Component, OnInit } from '@angular/core';

import { YelpService } from '../yelp';

@Component({
  selector: 'sg-bardetail',
  styles: [
    require('./bardetail.component.scss')
  ],
  template: require('./bardetail.component.html')
})
class BarDetailComponent implements OnInit {
  constructor(
    private _yelpService: YelpService
  ) {
    //
  }

  public ngOnInit(): void {
    //
  }
}

export { BarDetailComponent };
