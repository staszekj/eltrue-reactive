import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {RegistrationModule} from '../registration/registration.module';
import {UsersListModule} from '../usersList/users-list.module';

@NgModule({
  imports: [RegistrationModule, UsersListModule],
  declarations: [UsersComponent],
  exports: [],
  providers: []
})
export class UsersModule {

}
