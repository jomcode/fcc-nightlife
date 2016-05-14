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

  private searchResultSource: any = new Subject();

  public searchResult$: any = this.searchResultSource.asObservable();

  constructor() {
    this.app = feathers()
      .configure(rest(rootUrl).superagent(superagent))
      .configure(hooks())
      .configure(authentication({ storage: window.localStorage }));
  }

  public login(email: string, password: string): any {
    return Observable.from(this.app.authenticate({
      type: 'local',
      email,
      password
    })
    .then((result: any) => result)
    .catch((error: any) => console.error('error', error))
    );
  }

  public logout(): void {
    this.app.logout();
  }

  public getBars(location: string): any {
    const yelp: any = this.app.service('yelp');

    return Observable.from(yelp.find({ query: { location } })
      .then((result: any) => result.data)
      .catch((error: any) => console.error('error', error))
    );
  }
}

export { FeathersService };
