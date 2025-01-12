import { Component } from '@angular/core';
import { UiModule } from '../../../modules/ui/ui.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, StorageService, ToastService} from '../../../application/services/index';
import { LoginInterface } from '../../../core/domain/interfaces';
import { Router } from '@angular/router';

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
    private storageService: StorageService,
    private toastService: ToastService,
    private authService: AuthService,
    private router: Router
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

  //*-----------------------------------------
  //* Methods
  //*-----------------------------------------

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

      const loginData: LoginInterface = { str_user_email, str_user_password };

      this.authService.login(loginData)
      .subscribe({
        next: (response) => {
          setTimeout(() => {
            this.toastService.showToast('success', 'Usuario autenticado con éxito');

            if (rememberMe) {
              this.storageService.setItem('rememberedEmail', str_user_email);
            } else {
              this.storageService.removeItem('rememberedEmail');
            }
            this.router.navigate(['/dashboard']);
            this.loading = false;
          }, 2000);
        },
        error: (error) => {
          this.toastService.showToast('error', 'Credenciales inválidas. Inténtalo de nuevo.');
          this.loading = false
        }
      })
    }else{
      this.toastService.showToast('error', 'Por favor, completa los campos correctamente.');
    }
  }
}
