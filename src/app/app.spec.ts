import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEachProviders(() => [
    AppComponent
  ]);

  it('should have an appName', inject([ AppComponent ], (app: AppComponent) => {
    expect(app.appName).toBeDefined();
  }));
});
