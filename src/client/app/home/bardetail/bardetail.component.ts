import { Component, OnInit } from '@angular/core';
import { OnActivate } from '@angular/router';

import { YelpService } from '../yelp';

@Component({
  selector: 'sg-bardetail',
  styles: [
    require('./bardetail.component.scss')
  ],
  template: require('./bardetail.component.html')
})
class BarDetailComponent implements OnInit, OnActivate {
  public bar: any;

  constructor(
    private _yelpService: YelpService
  ) {
    //
  }

  public ngOnInit(): void {
    //
  }

  public routerOnActivate(curr: any): void {
    const { parameters: { barId } }: any = curr;
    this._getBarDetails(barId).then((b: any) => this.bar = Object.assign({}, b));
  }

  private _getBarDetails(barId: number): any {
    return this._yelpService.getBarDetails(barId);
  }
}

export { BarDetailComponent };
