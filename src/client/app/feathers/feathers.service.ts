import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

const feathers: any = require('feathers/client');
// const localstorage: any = require('feathers-localstorage');
const hooks: any = require('feathers-hooks');
const rest: any = require('feathers-rest/client');
const authentication: any = require('feathers-authentication/client');
const superagent: any = require('superagent');

const rootUrl: string = process.env.NODE_ENV === 'production' ?
  `${window.location.origin}` :
  'http://localhost:3030';

@Injectable()
class FeathersService {
  private app: any;

  private signupSource: Subject<any> = new Subject<any>();
  public signup$: any = this.signupSource.asObservable();

  private loginSource: any = new Subject();
  public login$: any = this.loginSource.asObservable();

  private searchResultSource: any = new Subject();
  public searchResult$: any = this.searchResultSource.asObservable();

  private detailSource: any = new Subject();
  public detail$: any = this.detailSource.asObservable();

  constructor() {
    this.app = feathers()
      .configure(rest(rootUrl).superagent(superagent))
      .configure(hooks())
      .configure(authentication({
        storage: window.localStorage,
        tokenKey: 'jom-nightlife-jwt'
      }));
  }

  public signup(user: any): any {
    const users: any = this.app.service('users');

    users.create(user)
     .then((result: any) => this.signupSource.next(this.extractData(result)))
     .catch((error: any) => this.handleError(error));
  }

  public login(email: string, password: string): any {
    this.app.authenticate({
      type: 'local',
      email,
      password
    })
    .then((result: any) => this.loginSource.next(this.extractData(result)))
    .catch((error: any) => this.handleError(error));
  }

  public logout(): void {
    this.app.logout();
  }

  public getBars(location: string): any {
    const yelp: any = this.app.service('yelp');

    yelp.find({ query: { location } })
    .then((result: any) => this.searchResultSource.next(this.extractData(result)))
    .catch((error: any) => this.handleError(error));
  }

  public getBarDetails(barId: any): any {
    const yelp: any = this.app.service('yelp');

    yelp.get(barId, undefined)
    .then((result: any) => this.detailSource.next(this.extractData(result)))
    .catch((error: any) => this.handleError(error));
  }

  private extractData(response: any): any {
    if (Array.isArray(response.data)) return response.data.slice(0);
    return Object.assign({}, response.data || {});
  }

  private handleError(error: any): any {
    const msg: any = error.message || 'Server error';
    return Observable.throw(msg);
  }
}

export { FeathersService };
