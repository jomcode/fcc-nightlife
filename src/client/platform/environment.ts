import { enableProdMode } from '@angular/core';

let PROVIDERS: Array<any> = [];

if (process.env.NODE_ENV === 'production') {
  enableProdMode();

  PROVIDERS = [...PROVIDERS];
}

if (process.env.NODE_ENV === 'development') {
  PROVIDERS = [...PROVIDERS];
}

const ENV_PROVIDERS: Array<any> = [
  ...PROVIDERS
];

export { ENV_PROVIDERS };
