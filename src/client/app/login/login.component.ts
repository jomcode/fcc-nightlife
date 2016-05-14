import { Component, OnDestroy } from '@angular/core';

import { FeathersService } from '../feathers';
import { AppState } from '../app.service';

@Component({
  selector: 'sg-login',
  styles: [
    require('./login.component.scss')
  ],
  template: require('./login.component.html')
})
class LoginComponent implements OnDestroy {
  private loginSubscription: any;

  constructor(
    private feathersService: FeathersService,
    public appState: AppState
  ) {
    this.loginSubscription = feathersService.login$.subscribe(
      (result: any) => { /* TODO: handle success */ },
      (error: any) => { /* TODO: handle error */ console.error(error); }
    );
  }

  public onSubmit(d: any): any {
    this.feathersService.login(d.emailInput, d.passwordInput);
  }

  public ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}

export { LoginComponent };
