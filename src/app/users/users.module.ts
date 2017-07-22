import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {RegistrationModule} from '../registration/registration.module';
import {UsersListModule} from '../usersList/users-list.module';
import {UsersListComponent} from '../usersList/users-list.component';

@NgModule({
  imports: [RegistrationModule, UsersListModule],
  declarations: [UsersComponent, UsersListComponent],
  exports: [],
  providers: []
})
export class UsersModule {

}
