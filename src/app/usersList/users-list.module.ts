import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListService} from './users-list.service';
import {UsersListComponent} from './users-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UsersListComponent],
  exports: [UsersListComponent],
  providers: [UsersListService],
})
export class UsersListModule {
}
