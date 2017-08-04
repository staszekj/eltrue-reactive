import {Component} from '@angular/core';
import {RegistrationDialogDirective} from './registration-dialog.directive';
import {RegistrationService} from './registration.service';
import {UsersListService} from './users-list.service';

@Component({
  selector: 'el-users-list',
  template: `
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      <tr *ngFor="let row of usersListService.rowsObservable | async">
        <td>{{row.firstName}}</td>
        <td>{{row.lastName}}</td>
      </tr>
    </table>`
})
export class UsersListComponent {
  constructor(public usersListService: UsersListService) {
  }
}
