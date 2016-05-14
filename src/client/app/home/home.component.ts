import { Component, OnInit } from '@angular/core';

import { AppState } from '../app.service';
import { BarListComponent } from './barlist';
import { SearchComponent } from './search';
import { YelpService } from '../yelp';

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
  constructor(
    private _yelpService: YelpService,
    public appState: AppState
  ) {
    //
  }

  public ngOnInit(): void {
    //
  }

  public getBars(query: string): any {
    return this._yelpService.getBars(query);
  }

  public handleSearchSubmit(d: any): any {
    const { value, isValid }: any = d;
    if (isValid) {
      this.getBars(value)
        .subscribe(
          (bars: any) => this.appState.state.bars = bars,
          (error: any) => this.appState.state.errorMessage = error
        );
    }
  }
}

export { HomeComponent };
