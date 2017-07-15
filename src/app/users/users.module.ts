import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {RegistrationModule} from '../registration/registration.module';

@NgModule({
  imports: [RegistrationModule],
  declarations: [UsersComponent],
  exports: [],
  providers: []
})
export class UsersModule {

}
