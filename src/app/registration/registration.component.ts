import {Component, ViewChild} from '@angular/core';
import {RegistrationDialogDirective} from './registration-dialog.directive';
import {NgForm} from '@angular/forms';
import {Registration} from './registration.types';
import {RegistrationService} from './registration.service';

@Component({
  selector: 'el-registration',
  template: `
    <el-registration-form *el-registration-dialog
                          [registration]='registration'
                          (onRegistationSubmit)='onRegistrationSubmit($event)'>
    </el-registration-form>
    <button md-raised-button (click)='onButtonClick()'>Registration form</button>`
})
export class UserRegistrationComponent {
  public registration: Registration;
  @ViewChild(RegistrationDialogDirective)
  private registrationDialog: RegistrationDialogDirective;

  constructor(public registrationService: RegistrationService) {
    registrationService.renderRegistrationObservable.subscribe(this.renderDialog.bind(this));
    registrationService.openRegistrationObservable.subscribe(this.openDialog.bind(this));
    registrationService.closedRegistrationObservable.subscribe(this.closeDialog.bind(this));
  }

  public onButtonClick() {
    this.registrationService.startRegistration();
  }

  public onRegistrationSubmit(registrationForm: NgForm) {
    if (registrationForm.valid) {
      this.registrationService.submitRegistration(this.registration);
    }
  }

  private renderDialog(registration) {
    this.registration = registration;
  }
  private openDialog() {
    this.registrationDialog.openDialog();
  }

  private closeDialog(registration) {
    this.registrationDialog.closeDialog();
  }
}
