import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home';
import { YelpService } from './home/yelp';

@Component({
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    YelpService
  ],
  selector: 'sg-app',
  styles: [
    require('./app.component.scss')
  ],
  template: require('./app.component.html'),
  encapsulation: ViewEncapsulation.None
})
@Routes([
  {
    path: '/',
    component: HomeComponent
  }
])
class AppComponent implements OnInit {
  public appName: string = 'Nightlife Coordination';

  constructor(private _router: Router) {
    //
  }

  public ngOnInit(): void {
    this._router.navigate(['/']);
  }
}

export { AppComponent };
