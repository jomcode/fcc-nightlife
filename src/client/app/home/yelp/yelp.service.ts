import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { mockData } from './mockdata';

const rootUrl: string = process.env.NODE_ENV === 'production' ?
  `${window.location.origin}` :
  'http://localhost:3030';

@Injectable()
class YelpService {
  constructor(private http: Http) {
    //
  }

  public getBars(query: string): any {
    // return Promise.resolve(mockData);
    return this.http
      .get(`${rootUrl}/yelp?location=${query}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getBarDetails(barId: number): Promise<any> {
    return Promise.resolve(mockData[barId - 1]);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body: any = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    const msg = error.message || 'Server error';
    console.error(msg);
    return Observable.throw(msg);
  }

  // private _handleError(error: any): any {}
}

export { YelpService };
