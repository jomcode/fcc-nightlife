import { Component, OnInit } from '@angular/core';

import { BarListComponent } from './barlist';
import { SearchComponent } from './search';
import { YelpService } from './yelp';

@Component({
  directives: [
    BarListComponent,
    SearchComponent
  ],
  selector: 'sg-home',
  styles: [
    require('./home.component.scss')
  ],
  template: require('./home.component.html')
})
class HomeComponent implements OnInit {
  public yelpResults: Array<any>;
  public errorMessage: any;

  constructor(
    private _yelpService: YelpService
  ) {
    //
  }

  public ngOnInit(): void {
    //
    // this.getBars('').then((b: Array<any>) => this.yelpResults = b.slice(0));
  }

  public getBars(query: string): any {
    return this._yelpService.getBars(query);
  }

  public handleSearchSubmit(d: any): any {
    const { value, isValid }: any = d;
    if (isValid) {
      // this.getBars(value).then((b: Array<any>) => this.yelpResults = b.slice(0));
      this.getBars(value)
        .subscribe(
          (bars: any) => console.log('bars', bars),
          (error: any) => this.errorMessage = error
        );
    }
  }
}

export { HomeComponent };
