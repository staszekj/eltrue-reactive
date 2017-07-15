import {Component, ViewChild} from '@angular/core';
import {RegistrationDialogDirective} from './registration-dialog.directive';
import {NgForm} from '@angular/forms';
import {Registration, RegistrationStatus} from './registration';
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
    registrationService.registrationObservable.subscribe(this.handleRegistrationObservable.bind(this));
  }

  public onButtonClick() {
    this.registrationService.startRegistration();
  }

  public onRegistrationSubmit(registrationForm: NgForm) {
    if (registrationForm.valid) {
      this.registrationService.submitRegistration(this.registration);
    }
  }

  private openDialog() {
    if (this.registrationDialog.isOpened()) {
      return;
    }
    this.registrationDialog.openDialog();
  }

  private closeDialog() {
    if (!this.registrationDialog) {
      return;
    }
    this.registrationDialog.closeDialog();
  }

  private handleRegistrationObservable(registration: Registration) {
    this.registration = registration;
    switch (registration.status) {
      case RegistrationStatus.OPEN:
      case RegistrationStatus.PROCESSING:
        this.openDialog();
        break;
      default:
        this.closeDialog();
    }
  }
}
