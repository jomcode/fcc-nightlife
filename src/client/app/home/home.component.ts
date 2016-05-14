import { Component, OnDestroy } from '@angular/core';

import { AppState } from '../app.service';
import { BarListComponent } from './barlist';
import { SearchComponent } from './search';
import { FeathersService } from '../feathers';

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
class HomeComponent implements OnDestroy {
  private searchSubscription: any;

  constructor(
    private feathersService: FeathersService,
    public appState: AppState
  ) {
    this.searchSubscription = feathersService.searchResult$.subscribe(
      (results: any) => this.appState.state.bars = results,
      (error: any) => this.appState.state.errorMessage = error
    );
  }

  public getBars(location: string): any {
    return this.feathersService.getBars(location);
  }

  public handleSearchSubmit(d: any): any {
    const { value, isValid }: any = d;
    if (isValid) {
      this.getBars(value);
    }
  }

  public ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}

export { HomeComponent };
