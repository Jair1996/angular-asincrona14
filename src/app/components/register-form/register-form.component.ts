import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: [],
})
export class RegisterFormComponent {
  registerForm: FormGroup = this.fb.group({
    nombre: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1\\s]+$'),
      ],
    ],
    dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}')]],
    estadoCivil: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  sendMessage() {}

  isTheFieldInvalid(control: string) {
    return (
      this.registerForm.controls[control].errors &&
      this.registerForm.controls[control].touched
    );
  }
}
