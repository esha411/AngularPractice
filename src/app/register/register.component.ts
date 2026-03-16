import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor() {
    this.onContactChange();
  }

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
    contactMethod: new FormControl('email', [Validators.required]),
    phoneNum: new FormControl('')
  }, [this.passwordMatchValidator])

  get username() { return this.signupForm.get('username'); }
  get userEmail() { return this.signupForm.get('userEmail'); }
  get userPassword() { return this.signupForm.get('userPassword'); }
  get confirmPwd() { return this.signupForm.get('confirmPwd'); }
  get contactMethod() { return this.signupForm.get('contactMethod'); }
  get phoneNum() { return this.signupForm.get('phoneNum'); }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const pwd = control.get('userPassword');
    const confirmPwd = control.get('confirmPwd');
    if (pwd?.value !== confirmPwd?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onContactChange(): void {
    const selected = this.contactMethod?.value;
    const phoneControl = this.signupForm.get('phoneNum');
    if (selected === 'phone') {
      phoneControl?.setValidators([Validators.required]);
    } else {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity();
  }

  onSubmit(): void {
    console.log('Submitted:', this.signupForm.getRawValue());
    this.signupForm.reset({ contactMethod: 'email' });
    this.onContactChange();
  }
}