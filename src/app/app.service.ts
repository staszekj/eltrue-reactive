import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AppStateType, StateSubjectEvent} from './app.types';

@Injectable()
export class AppService {
  private _state: AppStateType = new AppStateType();
  private _stateSubject: BehaviorSubject<StateSubjectEvent> = new BehaviorSubject<StateSubjectEvent>({
    state: this._state,
    keyPath: [] as [string]
  });

  public get stateObservable(): Observable<StateSubjectEvent> {
    return this._stateSubject.asObservable();
  }

  public setIn(keyPath: [any], value: any) {
    this._state = this._state.setIn(keyPath, value) as AppStateType;
    this._stateSubject.next({state: this._state, keyPath});
    console.log('setIn', this._state.toJS());
  }

  public get state(): AppStateType {
    return this._state;
  }

  public restoreState(appState: AppStateType) {
    this._state = appState;
  }
}
