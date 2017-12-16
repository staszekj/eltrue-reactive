import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Registration, RegistrationStatus} from './registration.types';

@Component({
  selector: 'el-registration-form',
  template: `<h1 mat-dialog-title>Registration</h1>
  <form #registrationForm="ngForm" (ngSubmit)="onSubmit(registrationForm)">
    <div mat-dialog-content>
      <mat-input-container>
        <input name="firstName"
               [(ngModel)]="registration.firstName"
               #firstName="ngModel"
               placeholder="First Name"
               matInput required/>
      </mat-input-container>
      <mat-input-container>
        <input name="lastName"
               [(ngModel)]="registration.lastName"
               #lastName="ngModel"
               placeholder="Last Name"
               matInput required/>
      </mat-input-container>
    </div>
    <mat-progress-bar *ngIf="isProcessing()" mode="query"></mat-progress-bar>
    <div mat-dialog-actions>
      <button type="submit" mat-button>Submit</button>
      <button type="reset" mat-button>Reset</button>
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
