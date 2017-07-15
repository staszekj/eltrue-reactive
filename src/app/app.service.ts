import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {INIT_REGISTRATION, Registration} from './registration/registration';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface InternalStateType {
  [key: string]: any;
  registration?: Registration;
}

@Injectable()
export class AppService {
  private _state: InternalStateType = {
    registration: INIT_REGISTRATION
  };
  private _stateSubject: BehaviorSubject<InternalStateType> = new BehaviorSubject<InternalStateType>(this._state);

  /*
   * PUBLIC
   */
  constructor() {
  }

  public nextRegistration(registration: Registration) {
    return this._stateSubject.next({...this._state, registration});
  }

  public restoreState(state: InternalStateType) {
    this._state = state;
  }

  public get state() {
    return {...this._state};
  }

  /*
   * OBSERVABLES
   */

  public get stateSubject(): Observable<InternalStateType> {
    return this._stateSubject.map(state => {
      this._state = state;
      return state;
    });
  }
}
