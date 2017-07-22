import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {Http, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import {Registration, RegistrationStatus, STATUS} from './registration.types';
import {HttpKey, LAST_HTTP, StateSubjectEvent} from '../app.types';
import {Observable} from 'rxjs/Observable';
import {API_REGISTRATION} from '../registration/registration.types';

@Injectable()
export class UsersListService {
  public newUserRegisteredObservable: Observable<StateSubjectEvent> = this.app.stateObservable
    .filter(event => {
      const httpKey = new HttpKey(RequestMethod.Put, API_REGISTRATION).toKey();
      return event.keyPath[0] === LAST_HTTP && event.state.lastHttp.has(httpKey);
    });

  constructor(public app: AppService, public http: Http) {
    this.newUserRegisteredObservable.subscribe(this.handleNewUser.bind(this));
  }

  public handleNewUser(event) {
    console.log('TODO: Implement action after user registration', event);
  }
}
