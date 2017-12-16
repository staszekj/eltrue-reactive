import {NgModule} from '@angular/core';
import {UserRegistrationComponent} from './registration.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatProgressBarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RegistrationFormDialogComponent} from './registration-form.component';
import {RegistrationDialogDirective} from './registration-dialog.directive';
import {RegistrationService} from './registration.service';
import {AppService} from '../app.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatInputModule, MatTooltipModule, MatProgressBarModule, FormsModule],
  declarations: [UserRegistrationComponent, RegistrationFormDialogComponent, RegistrationDialogDirective],
  exports: [UserRegistrationComponent],
  providers: [RegistrationService, AppService]
})
export class RegistrationModule {

}
