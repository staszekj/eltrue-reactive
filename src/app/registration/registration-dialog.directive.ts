import {Directive, TemplateRef} from '@angular/core';
import {MatDialog} from '@angular/material';

@Directive({
  selector: '[el-registration-dialog]'
})
export class RegistrationDialogDirective {
  constructor(public registrationDialogTemplate: TemplateRef<RegistrationDialogDirective>,
              public matDialog: MatDialog) {
  }

  public openDialog() {
    this.matDialog.open(this.registrationDialogTemplate);
  }

  public closeDialog() {
    this.matDialog.closeAll();
  }
}
