import { Component } from '@angular/core';

import { YelpService } from '../yelp';
import { FeathersService } from '../feathers';
import { AppState } from '../app.service';

@Component({
  selector: 'sg-login',
  styles: [
    require('./login.component.scss')
  ],
  template: require('./login.component.html')
})
class LoginComponent {
  constructor(
    private yelpService: YelpService,
    private feathers: FeathersService,
    public appState: AppState
  ) {
    //
  }

  public onSubmit(d: any): any {
    this.feathers.login(d.emailInput, d.passwordInput)
      .subscribe(
        (result: any) => console.log(result),
        (error: any) => console.error(error)
      );
  }
}

export { LoginComponent };
