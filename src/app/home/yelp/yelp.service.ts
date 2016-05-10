import { Injectable } from '@angular/core';

import { mockData } from './mockdata';

@Injectable()
class YelpService {
  constructor() {
    //
  }

  public getBars(query: string): any {
    return Promise.resolve(mockData);
  }

  // private handleError(error: any): any {}
}

export { YelpService };
