import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {Http, RequestMethod} from '@angular/http';
import {RegistrationStatus, STATUS} from './registration.types';
import {HttpKey, LAST_HTTP} from '../app.types';
import {Observable} from 'rxjs/Observable';
import {API_REGISTRATION} from '../registration/registration.types';
import {Row} from './users-list.types';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class UsersListService {
  public rowsObservable: Observable<Row[]> = this.app.stateObservable
    .filter(event => {
      const httpKey = new HttpKey(RequestMethod.Put, API_REGISTRATION).toKey();
      return event.keyPath[0] === LAST_HTTP && event.state.lastHttp.has(httpKey);
    })
    .flatMap(a => {
      return Observable.of([
        {
          firstName: 'a1',
          lastName: 'b1'
        },
        {
          firstName: 'a2',
          lastName: 'b2'
        }
      ]);
    });

  constructor(public app: AppService, public http: Http) {
  }
}
