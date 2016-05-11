import { Injectable } from '@angular/core';

import { mockData } from './mockdata';

@Injectable()
class YelpService {
  constructor() {
    //
  }

  public getBars(query: string): Promise<any> {
    return Promise.resolve(mockData);
  }

  public getBarDetails(barId: number): Promise<any> {
    return Promise.resolve(mockData[barId - 1]);
  }

  // private _handleError(error: any): any {}
}

export { YelpService };
