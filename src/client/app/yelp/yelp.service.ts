import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const rootUrl: string = process.env.NODE_ENV === 'production' ?
  `${window.location.origin}` :
  'http://localhost:3030';

@Injectable()
class YelpService {
  constructor(private http: Http) {
    //
  }

  public signup(user: any): any {
    const headers: Headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const options: RequestOptions = new RequestOptions({ headers });

    const body: string = JSON.stringify(user);

    return this.http.post(`${rootUrl}/user`, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getBars(query: string): any {
    const headers: Headers = new Headers({
      'Accept': 'application/json'
    });

    const options: RequestOptions = new RequestOptions({ headers });

    return this.http
      .get(`${rootUrl}/yelp?location=${query}`, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getBarDetails(barId: number): any {
    const headers: Headers = new Headers({
      'Accept': 'application/json'
    });

    const options: RequestOptions = new RequestOptions({ headers });

    return this.http
      .get(`${rootUrl}/yelp/${barId}`, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): any {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body: any = res.json();
    console.log('body', body);
    return body.data || {};
  }

  private handleError(error: any): any {
    const msg: any = error.message || 'Server error';
    console.error(msg);
    return Observable.throw(msg);
  }
}

export { YelpService };
