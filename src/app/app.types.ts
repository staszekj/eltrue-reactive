import {RequestMethod} from '@angular/http';
import {Registration} from './registration/registration.types';
import {Record} from 'immutable';

export class HttpKey {
  constructor(public method: RequestMethod, public url: string) {
  }

  public toKey() {
    return RequestMethod[this.method] + ' - ' + this.url;
  }
}

export interface HttpValue {
  request: any;
  response: any;
}

const AppStateImmutable = Record({
  registration: new Registration(),
  lastHttp: new Map()
});
export class AppStateType extends AppStateImmutable {
  [key: string]: any;
  public registration: Registration;
  public lastHttp: Map<string, HttpValue>;
}

export interface StateSubjectEvent {
  state: AppStateType;
  keyPath: [any];
}

export const REGISTRATION: string = 'registration';
export const LAST_HTTP: string = 'lastHttp';
