import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {Headers, Http, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import {API_REGISTRATION, Registration, RegistrationStatus, STATUS} from './registration.types';
import {HttpKey, HttpValue, LAST_HTTP, REGISTRATION} from '../app.types';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

  public renderRegistrationObservable: Observable<Registration> = this.app.stateObservable
    .filter(this.keyPathContainsRegistration)
    .map(this.stateToRegistrationObject);
  public openRegistrationObservable: Observable<Registration> = this.app.stateObservable
    .filter(this.keyPathContainsRegistration)
    .filter(event => {
      return event.state.registration.status === RegistrationStatus.OPEN;
    })
    .map(this.stateToRegistrationObject);
  public closedRegistrationObservable: Observable<Registration> = this.app.stateObservable
    .filter(this.keyPathContainsRegistration)
    .filter(event => {
      return event.state.registration.status === RegistrationStatus.SUCCESS;
    })
    .map(this.stateToRegistrationObject);

  constructor(public app: AppService, public http: Http) {
  }

  public startRegistration() {
    this.app.setIn([REGISTRATION, STATUS], RegistrationStatus.OPEN);
  }

  public submitRegistration(registration: Registration) {
    this.processHttpSubmit(registration);
  }

  private stateToRegistrationObject(event) {
    return event.state.registration.toObject() as Registration;
  }

  private keyPathContainsRegistration(event) {
    return event.keyPath[0] === REGISTRATION;
  }

  private processHttResponse(httpKey: HttpKey, httpValue: HttpValue) {
    if (httpKey.method === RequestMethod.Put && httpKey.url === API_REGISTRATION) {
      this.app.setIn([LAST_HTTP, httpKey.toKey()], httpValue);
      this.app.setIn([REGISTRATION, STATUS], RegistrationStatus.SUCCESS);
    }
  }

  private processHttpSubmit(registration: Registration) {
    this.app.setIn([REGISTRATION, STATUS], RegistrationStatus.PROCESSING);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(API_REGISTRATION, JSON.stringify(registration), {headers})
      .delay(2000)
      .subscribe(r => {
        const httpKey = new HttpKey(RequestMethod.Put, API_REGISTRATION);
        const httpValue = {
          request: registration,
          response: [registration]
        };
        this.processHttResponse(httpKey, httpValue);
      });
  }
}
