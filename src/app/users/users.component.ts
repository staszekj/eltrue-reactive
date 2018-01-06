import {Component} from '@angular/core';

@Component({
  selector: 'el-users',
  template: `
    <el-users-list></el-users-list>
    <br>
    <el-registration></el-registration>
  `
})
export class UsersComponent {
}
