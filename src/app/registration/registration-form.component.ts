import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Registration, RegistrationStatus} from './registration';

@Component({
  selector: 'el-registration-form',
  template: `<h1 md-dialog-title>Registration</h1>
  <form #registrationForm="ngForm" (ngSubmit)="onSubmit(registrationForm)">
    <div md-dialog-content>
      <md-input-container>
        <input name="firstName"
               [(ngModel)]="registration.firstName"
               #firstName="ngModel"
               placeholder="First Name"
               mdInput required/>
      </md-input-container>
      <md-input-container>
        <input name="lastName"
               [(ngModel)]="registration.lastName"
               #lastName="ngModel"
               placeholder="Last Name"
               mdInput required/>
      </md-input-container>
    </div>
    <md-progress-bar *ngIf="isProcessing()" mode="query"></md-progress-bar>
    <div md-dialog-actions>
      <button type="submit" md-button>Submit</button>
      <button type="reset" md-button>Reset</button>
    </div>
  </form>`
})
export class RegistrationFormDialogComponent {
  @Input()
  public registration: Registration;
  @Output()
  public onRegistationSubmit = new EventEmitter<NgForm>();

  public isProcessing() {
    return this.registration.status === RegistrationStatus.PROCESSING;
  }

  public onSubmit(registrationForm: NgForm) {
    this.onRegistationSubmit.emit(registrationForm);
  }
}
