import {Directive, TemplateRef} from '@angular/core';
import {MdDialog} from '@angular/material';

@Directive({
  selector: '[el-registration-dialog]'
})
export class RegistrationDialogDirective {
  private _isOpened;

  constructor(public registrationDialogTemplate: TemplateRef<RegistrationDialogDirective>,
              public mdDialog: MdDialog) {
  }

  public openDialog() {
    this.mdDialog.open(this.registrationDialogTemplate);
    this._isOpened = true;
  }

  public closeDialog() {
    this.mdDialog.closeAll();
    this._isOpened = false;
  }

  public isOpened(): boolean {
    return this._isOpened;
  }
}
