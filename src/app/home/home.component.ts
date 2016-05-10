import { Component, OnInit } from '@angular/core';

import { YelpService } from './yelp';

@Component({
  selector: 'sg-home',
  styles: [
    require('./home.component.scss')
  ],
  template: require('./home.component.html')
})
class HomeComponent implements OnInit {
  public yelpResults: Array<any>;

  constructor(
    private _yelpService: YelpService
  ) {
    //
  }

  private _getBars(query: string): Promise<Array<any>> {
    return this._yelpService.getBars(query);
  }

  public ngOnInit(): void {
    //
    this._getBars('').then((b: Array<any>) => this.yelpResults = b.slice(0));
  }
}

export { HomeComponent };
