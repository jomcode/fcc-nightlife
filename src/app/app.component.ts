import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { HomeComponent } from './home';
import { BarDetailComponent } from './home/bardetail';
import { YelpService } from './home/yelp';

@Component({
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    ROUTER_PROVIDERS,
    YelpService
  ],
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
  }
])
class AppComponent implements OnInit {
  public appName: string = 'Nightlife Coordination';

  constructor(private _router: Router) {
    //
  }

  public ngOnInit(): void {
    console.log('AppComponent ngOnInit');
  }
}

export { AppComponent };
