import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../application/services/toast.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sig-up-form.component.html',
  styleUrl: './sig-up-form.component.css',
})
export class SigUpFormComponent {
  //*-----------------------------------------------------
  //* Constructor
  //*-----------------------------------------------------
  constructor(private fb: FormBuilder, private toastService: ToastService) {
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

      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.toastService.showToast('success', 'Usuario creado exitosamente');
      }, 2000);
    }
  }
}
