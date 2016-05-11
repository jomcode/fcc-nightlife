import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEachProviders(() => [
    ROUTER_FAKE_PROVIDERS,
    AppComponent
  ]);

  it('should have an appName', inject([ AppComponent ], (app: AppComponent) => {
    expect(app.appName).toBeDefined();
  }));
});
