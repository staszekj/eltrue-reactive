import {NgModule} from '@angular/core';
import {UserRegistrationComponent, UsersListComponent} from './registration.component';
import {RegistrationFormDialogComponent} from './registration-form.component';
import {RegistrationDialogDirective} from './registration-dialog.directive';
import {RegistrationService} from './registration.service';
import {CommonModule} from '@angular/common';
import {UsersListService} from './users-list.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [UsersListService]
})
export class UsersListModule {
}
