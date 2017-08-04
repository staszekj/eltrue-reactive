import {RequestMethod} from '@angular/http';
import {Record} from 'immutable';

export enum RegistrationStatus {OPEN, PROCESSING, SUCCESS, VALIDATION_ERROR, ERROR, CLOSED}
export interface RegistrationHttp {
  url: string;
  method: RequestMethod;
  request: Registration;
  response: [Registration];
}
const RegistationImmutable = Record({
  firstName: 'Stan',
  lastName: 'Smith',
  status: RegistrationStatus.CLOSED
});
export class Registration extends RegistationImmutable {
  public firstName: string;
  public lastName: string;
  public status: RegistrationStatus;

  public constructor(firstName: string, lastName: string) {
    super({
      firstName,
      lastName,
      status: RegistrationStatus.CLOSED
    });
  }
}
export const API_REGISTRATION = '/api/registration';

export const FIRST_NAME = 'firstName';
export const LAST_NAME = 'lastName';
export const STATUS = 'status';
