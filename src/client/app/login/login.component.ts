import { Component } from '@angular/core';

import { FeathersService } from '../feathers';

@Component({
  selector: 'sg-login',
  styles: [
    require('./login.component.scss')
  ],
  template: require('./login.component.html')
})
class LoginComponent {
  private isFetching: boolean = false;

  constructor(
    private feathersService: FeathersService
  ) {}

  public onSubmit(d: any): any {
    this.isFetching = true;
    this.feathersService.login(d.emailInput, d.passwordInput);
  }
}

export { LoginComponent };
