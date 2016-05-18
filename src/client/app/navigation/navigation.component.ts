import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { FeathersService } from '../feathers';

@Component({
  styles: [
    require('./navigation.component.scss')
  ],
  template: require('./navigation.component.html'),
  selector: 'sg-navigation'
})
class NavigationComponent {
  public appName: string = 'Nightlife';

  constructor(
    private appState: AppState,
    private feathers: FeathersService
  ) {}

  public logout(): void {
    this.feathers.logout();
  }
}

export { NavigationComponent };
