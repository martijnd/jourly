import {WorkDay} from './workday.model';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName: string;
  workdays?: WorkDay[];
}
