import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {Http, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import {Subject} from 'rxjs/Subject';
import {Registration, RegistrationHttp, RegistrationStatus} from './registration';

@Injectable()
export class RegistrationService {
  private API_REGISTRATION = '/api/registration';
  private _registrationSubject: Observable<Registration> = this.app.stateSubject.map(it => it.registration);
  private _httpRegistrationSubject: Subject<RegistrationHttp> = new Subject();

  constructor(public app: AppService, public http: Http) {
    this.httpRegistrationObservable.subscribe(this.processHttResponse.bind(this));
  }

  /*
   * OBSERVABLES
   */
  public get httpRegistrationObservable(): Observable<RegistrationHttp> {
    return this._httpRegistrationSubject.asObservable();
  }

  public get registrationObservable(): Observable<Registration> {
    return this._registrationSubject;
  }

  public startRegistration() {
    this.processStartRegistration();
  }

  public submitRegistration(registration: Registration) {
    this.processHttpSubmit(registration);
  }

  private processStartRegistration() {
    const newRegistration = {...this.app.state.registration, status: RegistrationStatus.OPEN};
    this.app.nextRegistration(newRegistration);
  }

  private processHttResponse(registrationHttp: RegistrationHttp) {
    if (registrationHttp.method === RequestMethod.Put && registrationHttp.url === this.API_REGISTRATION) {
      const newRegistration = {...this.app.state.registration, status: RegistrationStatus.SUCCESS};
      this.app.nextRegistration(newRegistration);
    }
  }

  private processHttpSubmit(registration: Registration) {
    const newRegistration = {...this.app.state.registration, status: RegistrationStatus.PROCESSING};
    this.app.nextRegistration(newRegistration);
    return this.http.put(this.API_REGISTRATION, registration)
      .delay(2000)
      .subscribe(r => this._httpRegistrationSubject.next({
        method: RequestMethod.Put,
        url: this.API_REGISTRATION,
        request: registration,
        response: [registration]
      }));
  }
}
