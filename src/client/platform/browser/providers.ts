import {
  FORM_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

const APPLICATION_PROVIDERS: Array<any> = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
];

const PROVIDERS: Array<any>  = [
  ...APPLICATION_PROVIDERS
];

export { APPLICATION_PROVIDERS, PROVIDERS };
