import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home';

@Component({
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS ],
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
  public yelpResults: Array<any>;

  constructor(private router: Router) {
    //
  }

  public ngOnInit(): void {
    this.router.navigate(['/']);
  }
}

export { AppComponent };
