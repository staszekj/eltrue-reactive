import {NgModule} from '@angular/core';
import {UserRegistrationComponent} from './registration.component';
import {MdButtonModule, MdDialogModule, MdInputModule, MdProgressBarModule, MdTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RegistrationFormDialogComponent} from './registration-form.component';
import {RegistrationDialogDirective} from './registration-dialog.directive';
import {RegistrationService} from './registration.service';
import {AppService} from '../app.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, MdButtonModule, MdDialogModule, MdInputModule, MdTooltipModule, MdProgressBarModule, FormsModule],
  declarations: [UserRegistrationComponent, RegistrationFormDialogComponent, RegistrationDialogDirective],
  exports: [UserRegistrationComponent],
  providers: [RegistrationService, AppService]
})
export class RegistrationModule {

}
