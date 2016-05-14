import { Component, OnInit } from '@angular/core';
import { OnActivate } from '@angular/router';

import { YelpService } from '../../yelp';

@Component({
  selector: 'sg-bardetail',
  styles: [
    require('./bardetail.component.scss')
  ],
  template: require('./bardetail.component.html')
})
class BarDetailComponent implements OnInit, OnActivate {
  public isLoading: boolean = true;
  public errorMessage: any;
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

    this._getBarDetails(barId)
      .subscribe(
        (details: any) => { this.bar = details; this.isLoading = false; },
        (error: any) => this.errorMessage = error
      );
  }

  private _getBarDetails(barId: number): any {
    return this._yelpService.getBarDetails(barId);
  }
}

export { BarDetailComponent };
