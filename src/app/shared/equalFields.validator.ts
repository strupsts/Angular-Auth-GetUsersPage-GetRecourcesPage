import { AbstractControl } from '@angular/forms';

export function ValidatorEqualFields(control: AbstractControl):{[key: string]: boolean}  {
  console.log(control.get('password').value !== control.get('confirmPassword').value)
  if (control.get('password').value !== control.get('confirmPassword').value) {
    return { fieldsNotEqual: true };
  }
  return null;
}
