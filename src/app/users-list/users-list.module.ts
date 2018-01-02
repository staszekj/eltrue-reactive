import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListService} from './users-list.service';
import {UsersListComponent} from './users-list.component';
import {MatInputModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule],
  declarations: [UsersListComponent],
  exports: [UsersListComponent],
  providers: [UsersListService],
})
export class UserslistModule {
}
