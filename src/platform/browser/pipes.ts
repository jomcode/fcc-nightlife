import { PLATFORM_PIPES } from '@angular/core';

const APPLICATION_PIPES: Array<any> = [];

const PIPES: Array<any> = [
  {
    provide: PLATFORM_PIPES,
    multi: true,
    useValue: APPLICATION_PIPES
  }
];

export { APPLICATION_PIPES, PIPES };
