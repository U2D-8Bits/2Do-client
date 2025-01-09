import { Component } from '@angular/core';
import { UiModule } from '../../../modules/ui/ui.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../application/services/storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  //*-----------------------------------------
  //* Constructor
  //*-----------------------------------------
  constructor
  (
    private fb: FormBuilder,
    private storageService: StorageService
  ) {
    this.loginForm = this.fb.group({
      str_user_email: ['', [Validators.required, Validators.email]],
      str_user_password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });

    this.loadRememberedCredentials();
  }

  //*-----------------------------------------
  //* Properties
  //*-----------------------------------------

  loginForm: FormGroup;

  loading: boolean = false;

  //? Get Credentials
  loadRememberedCredentials(): void {
    const rememberedEmail = this.storageService.getItem('rememberedEmail');
    if (rememberedEmail) {
      this.loginForm.patchValue({
        str_user_email: rememberedEmail,
        rememberMe: true,
      });
    }
  }

  //? Submit Form - Login
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { str_user_email, str_user_password, rememberMe } =
        this.loginForm.value;

      this.loading = true;

      setTimeout(() => {
        console.log('Usuario autenticado:', {
          str_user_email,
          str_user_password,
        });

        if (rememberMe) {
          this.storageService.setItem('rememberedEmail', str_user_email);
        } else {
          this.storageService.removeItem('rememberedEmail');
        }

        this.loading = false;
      }, 2000);
    }
  }
}
