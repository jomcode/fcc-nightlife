import { Component, OnDestroy } from '@angular/core';

import { AppState } from '../app.service';
import { FeathersService } from '../feathers';

@Component({
  selector: 'sg-signup',
  styles: [
    require('./signup.component.scss')
  ],
  template: require('./signup.component.html')
})
class SignupComponent implements OnDestroy {
  private signupSubscription: any;

  constructor(
    private feathersService: FeathersService,
    public appState: AppState
  ) {
    this.signupSubscription = feathersService.signup$.subscribe(
      (result: any) => { /* TODO handle success */ },
      (error: any) => { /* TODO handle error */ }
    );
  }

  public onSubmit(d: any): any {
    this.feathersService.signup(this.formatUser(d));
  }

  public ngOnDestroy(): void {
    this.signupSubscription.unsubscribe();
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
