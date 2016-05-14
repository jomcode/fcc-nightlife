import { Component } from '@angular/core';

import { YelpService } from '../yelp';
import { AppState } from '../app.service';

@Component({
  selector: 'sg-signup',
  styles: [
    require('./signup.component.scss')
  ],
  template: require('./signup.component.html')
})
class SignupComponent {
  constructor(
    private yelpService: YelpService,
    public appState: AppState
  ) {
    //
  }

  public onSubmit(d: any): any {
    this.yelpService.signup(this.formatUser(d))
      .subscribe(
        (user: any) => console.log('user', user),
        (error: any) => this.appState.state.errorMessage = error
      );
  }

  private formatUser(u: any): any {
    return Object.assign({}, {
      username: u.usernameInput,
      email: u.emailInput,
      password: u.passwordInput
    });
  }
}

export { SignupComponent };
