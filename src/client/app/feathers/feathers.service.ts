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

  private barsSource: any = new Subject();
  public bars$: any = this.barsSource.asObservable();

  private detailSource: any = new Subject();
  public detail$: any = this.detailSource.asObservable();

  private checkinSource: any = new Subject();
  public checkin$: any = this.checkinSource.asObservable();

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
    .then((result: any) => this.barsSource.next(this.extractData(result)))
    .catch((error: any) => this.handleError(error));
  }

  public getBarDetails(barId: any): any {
    const yelp: any = this.app.service('yelp');

    yelp.get(barId, undefined)
    .then((result: any) => this.detailSource.next(this.extractData(result)))
    .catch((error: any) => this.handleError(error));
  }

  public checkin(barId: any): any {
    const checkin: any = this.app.service('checkin');

    const handleResult: any = (result: any) => {
      checkin.create({ barId, userId: this.app.get('user').id })
      .then((r: any) => this.checkinSource.next(r))
      .catch((e: any) => console.error('create error', e));
    };

    const handleError: any = (error: any) => {
      console.error('checkin error', error);
    };

    this.app.authenticate()
    .then((result: any) => handleResult(result))
    .catch((error: any) => handleError(error));
  }

  public getUser(): any {
    return this.app.get('user');
  }

  public getToken(): any {
    return this.app.get('token');
  }

  public authenticate(): any {
    return this.app.authenticate()
    .then((r: any) => r);
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
