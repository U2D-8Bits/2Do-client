import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../application/services/toast.service';
import { Router } from '@angular/router';
import { UserService } from '../../../application/services/index';
import { CreateUserInterface } from '../../../core/domain/interfaces';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sig-up-form.component.html',
  styleUrl: './sig-up-form.component.css',
})
export class SigUpFormComponent {
  //*-----------------------------------------------------
  //* Constructor
  //*-----------------------------------------------------
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private userService: UserService
  ) {
    this.signUpForm = this.fb.group({
      str_user_username: ['', [Validators.required, Validators.minLength(3)]],
      str_user_email: ['', [Validators.required, Validators.email]],
      str_user_password: ['', [Validators.required, Validators.minLength(6)]],
      str_user_confirm_password: [
        '',
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }

  //*-----------------------------------------------------
  //* Properties
  //*-----------------------------------------------------

  signUpForm: FormGroup;

  loading: boolean = false;

  //*-----------------------------------------------------
  //* Methods
  //*-----------------------------------------------------

  onSubmit() {
    //? Check if form is valid
    if (this.signUpForm.valid) {
      const {
        str_user_username,
        str_user_email,
        str_user_password,
        str_user_confirm_password,
      } = this.signUpForm.value;

      //? Check if passwords match
      if (str_user_password !== str_user_confirm_password) {
        this.toastService.showToast('error', 'Las Contraseñas no coinciden');
        return;
      }

      //? Set loading to true
      this.loading = true;

      const userData: CreateUserInterface = {
        str_user_username,
        str_user_email,
        str_user_password,
      }

      //? Call the service to register the user
      this.userService.registerUser(userData)
      .subscribe({
        next: (response) => {
          setTimeout(() => {
            this.toastService.showToast('success', 'Usuario creado correctamente');
            console.log(response);
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: (error) => {
          this.toastService.showToast('error', 'Error al crear el usuario');
          console.log(error);
        },
      })

    }
  }
}
