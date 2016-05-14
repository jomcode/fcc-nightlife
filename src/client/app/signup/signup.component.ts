import { Component } from '@angular/core';

import { YelpService } from '../yelp';

@Component({
  selector: 'sg-signup',
  styles: [
    require('./signup.component.scss')
  ],
  template: require('./signup.component.html')
})
class SignupComponent {
  constructor(
    private yelpService: YelpService
  ) {
    //
  }
  public onSubmit(d: any): any {
    console.log(d);
    this.yelpService.signup(d);
  }
}

export { SignupComponent };
