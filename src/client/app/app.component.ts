import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { AppState } from './app.service';
import { HomeComponent } from './home';
import { SignupComponent } from './signup';
import { LoginComponent } from './login';
import { FeathersService } from './feathers';

import { mockData } from './feathers/mockdata';

@Component({
  directives: [],
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
  }
])
class AppComponent implements OnInit, OnDestroy {
  public appName: string = 'Nightlife';

  private barsSubscription: any;
  private detailSubscription: any;
  private checkinSubscription: any;
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
      (result: any) => { /* TODO handle success */ },
      (error: any) => { /* TODO handle error */ }
    );

    // Signup Subscription
    this.signupSubscription = feathers.signup$.subscribe(
      (result: any) => { /* TODO handle success */ },
      (error: any) => { /* TODO handle error */ }
    );

    // Login Subscription
    this.loginSubscription = feathers.login$.subscribe(
      (result: any) => { /* TODO handle success */ },
      (error: any) => { /* TODO handle error */ }
    );

    // Router Subscription
    this.routerChangeSubscription = router.changes.subscribe(
      () => this.handleRouterChange()
    );
  }

  public ngOnInit(): void {
    const { state }: any = this.appState;

    const formatCredentials: any = (r: any) => Object.assign({}, {
      token: r.token,
      user: r.data
    });

    this.feathers.authenticate()
      .then((result: any) => state.credentials = formatCredentials(result))
      .catch((e: any) => state.credentials = {});

    this.appState.state.bars = mockData.slice(0);
  }

  public ngOnDestroy(): void {
    this.barsSubscription.unsubscribe();
    this.detailSubscription.unsubscribe();
    this.checkinSubscription.unsubscribe();
    this.signupSubscription.unsubscribe();
    this.loginSubscription.unsubscribe();
    this.routerChangeSubscription.unsubscribe();
  }

  private handleRouterChange(): void {
    // const { router: { urlTree } }: any = this;
    // barId urlTree._root.children[0].children[0].value.segment
    // console.log('serialized urlTree', this.router.serializeUrl(urlTree));
  }
}

export { AppComponent };
