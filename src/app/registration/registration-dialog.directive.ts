import {Directive, TemplateRef} from '@angular/core';
import {MdDialog} from '@angular/material';

@Directive({
  selector: '[el-registration-dialog]'
})
export class RegistrationDialogDirective {
  constructor(public registrationDialogTemplate: TemplateRef<RegistrationDialogDirective>,
              public mdDialog: MdDialog) {
  }

  public openDialog() {
    this.mdDialog.open(this.registrationDialogTemplate);
  }

  public closeDialog() {
    this.mdDialog.closeAll();
  }
}
