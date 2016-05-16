import { Component } from '@angular/core';

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
class HomeComponent {
  constructor(
    public feathersService: FeathersService,
    public appState: AppState
  ) {}

  public getBars(location: string): any {
    return this.feathersService.getBars(location);
  }

  public handleSearchSubmit(d: any): any {
    const { value, isValid }: any = d;
    if (isValid) {
      this.getBars(value);
    }
  }
}

export { HomeComponent };
