//*-----------------------------------------------------------------
//* Imports
//*-----------------------------------------------------------------
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services';
import { StorageService } from '../services';

//*-----------------------------------------------------------------
//* Guard
//*-----------------------------------------------------------------
export const noAuthGuard: CanActivateFn = (route, state) => {
  //*-----------------------------------------------------------------
  //* Inject services
  //*-----------------------------------------------------------------
  const authService = inject(AuthService);
  const storageService = inject(StorageService);
  const router = inject(Router);
  const token = storageService.getItem('token');

  //*-----------------------------------------------------------------
  //* Check if user is authenticated
  //*-----------------------------------------------------------------
  if (token) {
    const isTokenValid = authService.verifyToken(token);
    if (isTokenValid) {
      router.navigate(['/dashboard']);
      return false;
    }
  }

  return true;
};
