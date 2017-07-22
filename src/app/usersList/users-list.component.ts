import {Component} from '@angular/core';
import {RegistrationDialogDirective} from './registration-dialog.directive';
import {Registration, RegistrationStatus} from './registration.types';
import {RegistrationService} from './registration.service';
import {UsersListService} from './users-list.service';

@Component({
  selector: 'el-users-list',
  template: ``
})
export class UsersListComponent {

  constructor(public usersListService: UsersListService) {
  }
}
