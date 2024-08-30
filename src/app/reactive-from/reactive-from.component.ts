import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from '../iuser';
import { IsPasswordMatching } from '../customValidation/passwordCheckValidation';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrl: './reactive-from.component.scss'
})
export class ReactiveFromComponent {
  userRegstiration: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userRegstiration = fb.group({
      fullName: ['', [Validators.pattern('[A-Za-z]{3,}'), Validators.required]],
      email: ['', [Validators.required , this.existEmailValidators()]],
      phoneNO: fb.array([this.fb.control('')]),
      address: fb.group({
        city: [''],
        postCode: [''],
        street: ['']
      }),
      password: [''],
      confirmPassword: [''],
      referral: [''],
      referralOther: ['']
    },{validators:IsPasswordMatching});
  }
  get fullName() {
    return this.userRegstiration.get('fullName');
  }
  get phoneNumbers() {
    return this.userRegstiration.get('phoneNO') as FormArray;
  }
  get getEmail() {
    return this.userRegstiration.get('email');
  }
  get password() {
    return this.userRegstiration.get('password');
  }
  get confirmPassword() {
    return this.userRegstiration.get('confirmPassword');
  }
  sumbit() {
    let userModel: IUser = this.userRegstiration.value as IUser
    console.log(userModel);
  }
  addPhoneNo(event: any) {
    this.phoneNumbers.push(new FormControl(''));
    event.target?.classList.add('d-none');
  }
  updateRefferialValidator() {

    if (this.userRegstiration.get('referral')?.value == 'youtube') {
      this.userRegstiration.get('referralOther')?.addValidators([Validators.required]);
    }
    else {
      this.userRegstiration.get('referralOther')?.clearValidators();
    }
    this.userRegstiration.get('referralOther')?.updateValueAndValidity();

  }
  existEmailValidators(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      let emailVal: string = control.value;
      let validationError = { 'EmailNotValid': { value: emailVal } }
      if (emailVal.length == 0 && control.untouched) return null;
      return (emailVal.includes('@')) ? null : validationError;

    }

  }
}

