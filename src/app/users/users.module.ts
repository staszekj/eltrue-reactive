import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {RegistrationModule} from '../registration/registration.module';
import {UserslistModule} from '../users-list/users-list.module';

@NgModule({
  imports: [RegistrationModule, UserslistModule],
  declarations: [UsersComponent],
  exports: [],
  providers: []
})
export class UsersModule {

}
