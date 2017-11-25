## Immutable state and reactive programing  

*Three different components, application state and collaboration rules*


![](app-diagram.png)

#### Motivations
Very rarely we have an option to start new project from green field.
Much often we need to add featutes to already existing product. 
We don't want to or simply can not do deep refactoring. 
What we can do is integrating already existing application elements.
Of course we can just send an event with data.
But events works fine if:

1. one component modify some data area ie. Feature A
while other components just listen on the change

1. we have limited such events becuase otherwise we have hell of communications
in all directions between each pair of components 

**Events won't work fine** if we two components modify **the same data** 
and both wants to **be informed about changes.**

This problem is resolved ie. by Redux, but let me show alternate solution using:
**Immutable.js** and **Reactive.io**

#### Goal
The problem we want to solve is:
1. we have one (registration.component.ts) that has its own data 
reprented by Registration class
1. we want to have other component (user-list.component.ts) 
that instead of making seperate request wants to 
cooperate with Registration component and read its data. 

As we will see later user-list.component can also modify data 
and registration component will be informed about it

#### Application State (app.service.ts)
First let's place the data that needs to be share one level up 
to the app.service.ts where we keep implementation of out appplication state
````
const AppStateImmutable = Record({
  registration: new Registration('John', 'Smith'),
});

export class AppStateType extends AppStateImmutable {
  public registration: Registration;
}

export interface StateSubjectEvent {
  state: AppStateType;
  keyPath: [any];
}
````

````
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
    console.log('setIn', keyPath, this._state.toJS());
  }
}
````

