import {Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';

export const ROUTES: Routes = [
  {path: '', component: UsersComponent},
  {path: 'registration', component: UsersComponent}
];
