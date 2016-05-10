import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-app',
  styles: [
    require('./app.component.scss')
  ],
  template: require('./app.component.html'),
})
class AppComponent implements OnInit {
  public appTitle: string = 'Nightlife Coordination';
  public yelpResults: Array<any>;

  constructor() {
    //
  }

  public ngOnInit(): void {
    //
  }
}

export { AppComponent };
