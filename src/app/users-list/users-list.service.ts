import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {Http, RequestMethod} from '@angular/http';
import {RegistrationStatus} from '../registration/registration.types';
import {HttpKey, HttpValue, LAST_HTTP, REGISTRATION} from '../app.types';
import {Observable} from 'rxjs/Observable';
import {API_USER, Row} from './users-list.types';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';

@Injectable()
export class UsersListService {
  public rowsObservable: Observable<Row[]> = this.app.stateObservable
    .filter(event => {
      return event.keyPath[0] === REGISTRATION && event.state.registration.status === RegistrationStatus.SUCCESS;
    })
    .startWith({
      state: this.app.state,
      keyPath: [] as [string]
    })
    .flatMap(() => {
      return this.processHttpSubmit();
    });

  constructor(public app: AppService, public http: Http) {
  }

  private processHttpSubmit(): Observable<Row[]> {
    return this.http.get(API_USER)
      .map(res => {
        const httpKey = new HttpKey(RequestMethod.Get, API_USER);
        const httpValue = {
          request: httpKey,
          response: res.json()
        };
        return this.processUsers(httpKey, httpValue);
      });
  }

  private processUsers(httpKey: HttpKey, httpValue: HttpValue): Row[] {
    if (httpKey.method === RequestMethod.Get && httpKey.url === API_USER) {
      this.app.setIn([LAST_HTTP, httpKey.toKey()], httpValue);
    }
    return httpValue.response;
  }
}
