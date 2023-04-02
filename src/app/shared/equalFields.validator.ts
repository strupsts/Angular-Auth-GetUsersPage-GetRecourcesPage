import { AbstractControl } from '@angular/forms';

export function ValidatorEqualFields(control: AbstractControl):{[key: string]: boolean}  {
  if (control.get('password').value !== control.get('confirmPassword').value) {
    return { fieldsNotEqual: true };
  }
  return null;
}
