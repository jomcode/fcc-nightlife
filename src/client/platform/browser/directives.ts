import { PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

const APPLICATION_DIRECTIVES: Array<any> = [
  ...ROUTER_DIRECTIVES
];

const DIRECTIVES: Array<any> = [
  {
    provide: PLATFORM_DIRECTIVES,
    multi: true,
    useValue: APPLICATION_DIRECTIVES
  }
];

export { APPLICATION_DIRECTIVES, DIRECTIVES };
