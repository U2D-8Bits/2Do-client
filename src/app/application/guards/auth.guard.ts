//*------------------------------------------------------------------
//* Imports
//*------------------------------------------------------------------
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services';
import { StorageService } from '../services';

//*------------------------------------------------------------------
//* Guard
//*------------------------------------------------------------------
export const authGuard: CanActivateFn = (route, state) => {

  //*------------------------------------------------------------------
  //* Variables
  //*------------------------------------------------------------------
  const authService = inject(AuthService);
  const router = inject(Router);
  const storageService = inject(StorageService);
  const token = storageService.getItem('token');

  //*------------------------------------------------------------------
  //* Logic
  //*------------------------------------------------------------------
  if (token) {
    const isTokenValid = authService.verifyToken(token);
    if (isTokenValid) {
      return true;
    }
  }

  //*------------------------------------------------------------------
  //* Redirect
  //*----------------------------------------------------------------
  router.navigate(['/login']);
  return false;
};
