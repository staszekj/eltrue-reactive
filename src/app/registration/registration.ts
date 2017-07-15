import {RequestMethod} from '@angular/http';

export enum RegistrationStatus {OPEN, PROCESSING, SUCCESS, VALIDATION_ERROR, ERROR, CLOSED}
export interface Registration {
  firstName: string;
  lastName: string;
  status: RegistrationStatus;
}
export interface RegistrationHttp {
  url: string;
  method: RequestMethod;
  request: Registration;
  response: [Registration];
}

export const INIT_REGISTRATION: Registration = {
  firstName: 'Stan',
  lastName: 'Smith',
  status: RegistrationStatus.CLOSED
};
