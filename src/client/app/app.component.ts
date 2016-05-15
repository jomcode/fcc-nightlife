import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { AppState } from './app.service';
import { HomeComponent } from './home';
import { BarDetailComponent } from './home/bardetail';
import { SignupComponent } from './signup';
import { LoginComponent } from './login';
import { FeathersService } from './feathers';

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
    path: '/bars/:barId',
    component: BarDetailComponent
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
class AppComponent implements OnInit {
  public appName: string = 'Nightlife Coordination';

  constructor(private _router: Router, public appState: AppState) {
    //
  }

  public ngOnInit(): void {
    //
  }
}

export { AppComponent };
