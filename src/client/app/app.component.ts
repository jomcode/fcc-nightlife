import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { AppState } from './app.service';
import { HomeComponent } from './home';
import { SignupComponent } from './signup';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation';
import { FeathersService } from './feathers';

@Component({
  directives: [ NavigationComponent ],
  providers: [ AppState, FeathersService ],
  selector: 'sg-app',
  styles: [
    require('./app.component.scss')
  ],
  template: require('./app.component.html')
})
@Routes([
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/signup',
    component: SignupComponent
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/logout',
    component: HomeComponent
  }
])
class AppComponent implements OnInit, OnDestroy {
  private barsSubscription: any;
  private detailSubscription: any;
  private checkinSubscription: any;
  private checkoutSubscription: any;
  private signupSubscription: any;
  private loginSubscription: any;
  private routerChangeSubscription: any;

  constructor(
    private router: Router,
    public feathers: FeathersService,
    public appState: AppState
  ) {
    const { state }: any = appState;

    // Bars Search Results Subscription
    this.barsSubscription = feathers.bars$.subscribe(
      (results: any) => state.bars = results,
      (error: any) => state.errorMessage = error
    );

    // Bar Details Subscription
    this.detailSubscription = feathers.detail$.subscribe(
      (result: any) => state.barDetails = result,
      (error: any) => state.errorMessage = error
    );

    // Checkin Subscription
    this.checkinSubscription = feathers.checkin$.subscribe(
      (result: any) => this.handleCheckin(result),
      (error: any) => { /* TODO handle error */ }
    );

    // Checkout Subscription
    this.checkoutSubscription = feathers.checkout$.subscribe(
      (result: any) => this.handleCheckout(result),
      (error: any) => { /* TODO handle error */ }
    );

    // Signup Subscription
    this.signupSubscription = feathers.signup$.subscribe(
      (result: any) => this.handleSignup(result),
      (error: any) => { /* TODO handle error */ }
    );

    // Login Subscription
    this.loginSubscription = feathers.login$.subscribe(
      (result: any) => this.handleLogin(result),
      (error: any) => { /* TODO handle error */ }
    );

    // Router Subscription
    this.routerChangeSubscription = router.changes.subscribe(
      () => this.handleRouterChange()
    );
  }

  public ngOnInit(): void {
    const { state }: any = this.appState;

    this.feathers.authenticate()
      .then((result: any) => this.setCredentials(result.token, result.data))
      .catch((e: any) => state.credentials = {});
  }

  public ngOnDestroy(): void {
    this.barsSubscription.unsubscribe();
    this.detailSubscription.unsubscribe();
    this.checkinSubscription.unsubscribe();
    this.checkoutSubscription.unsubscribe();
    this.signupSubscription.unsubscribe();
    this.loginSubscription.unsubscribe();
    this.routerChangeSubscription.unsubscribe();
  }

  private handleRouterChange(): void {
    // const { router: { urlTree } }: any = this;
    // barId urlTree._root.children[0].children[0].value.segment
    // console.log('serialized urlTree', this.router.serializeUrl(urlTree));
  }

  private handleSignup(result: any): void {
    this.router.navigate(['/login']);
  }

  private handleLogin(result: any): void {
    this.setCredentials(this.feathers.getToken(), this.feathers.getUser());
    this.router.navigate(['/']);
  }

  private handleCheckin(result: any): void {
    const { state }: any = this.appState;

    const updated: any = state.bars.map((b: any) => {
      if (b.id === result.barId) {
        return Object.assign({}, b, { checkins: [...b.checkins, result] });
      }
      return Object.assign({}, b);
    });
    state.bars = updated.slice(0);
  }

  private handleCheckout(result: any): void {
    const { state }: any = this.appState;

    const updated: any = state.bars.map((b: any) => {
      return Object.assign({}, b, {
        checkins: b.checkins.filter((c: any) => {
          let temp: boolean = true;
          result.forEach((r: any) => {
            if (r.barId === b.id) {
              if (state.credentials.user.id === r.userId) temp = false;
            }
          });
          return temp;
        })
      });
    });

    state.bars = updated.slice(0);
  }

  private setCredentials(token: any, user: any): void {
    this.appState.state.credentials = Object.assign({}, { token, user });
  }
}

export { AppComponent };
