import { Injectable } from '@angular/core';

@Injectable()
class AppState {
  public state: any = {
    isFetching: false
  };

  constructor() {
    //
  }
}

export { AppState };
