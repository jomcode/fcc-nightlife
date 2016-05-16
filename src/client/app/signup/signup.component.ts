import { Component } from '@angular/core';

import { FeathersService } from '../feathers';

@Component({
  selector: 'sg-signup',
  styles: [
    require('./signup.component.scss')
  ],
  template: require('./signup.component.html')
})
class SignupComponent {
  constructor(
    private feathersService: FeathersService
  ) {}

  public onSubmit(d: any): any {
    this.feathersService.signup(this.formatUser(d));
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
