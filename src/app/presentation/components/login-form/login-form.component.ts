import { Component } from '@angular/core';
import { UiModule } from '../../../modules/ui/ui.module';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  //*-----------------------------------------
  //* Constructor
  //*-----------------------------------------
  constructor(private fb: FormBuilder) {}

  //*-----------------------------------------
  //* Properties
  //*-----------------------------------------

  loginForm = this.fb.group({
    str_user_email: ['', [Validators.required, Validators.email]],
    str_user_password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loading: boolean = false;

  //? Submit Form - Login
  onSubmit(): void {
    if( this.loginForm.valid ){
      this.loading = true;
      setTimeout(() =>{
        console.log('Formulario enviado', this.loginForm.value);
        this.loading = false;
      },2500)
    }
  }
}
