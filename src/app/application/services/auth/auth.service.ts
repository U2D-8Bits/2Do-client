//*----------------------------------------
//* Imports
//*----------------------------------------
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {
  LoginInterface,
  LoginResponseInterface,
  UserInterface,
} from '../../../core/domain/interfaces';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { StorageService } from '../storage.service';
import { AuthStatusEnum } from '../../../core/domain/enum/auth-status.enum';

//*----------------------------------------
//* Injectable
//*----------------------------------------
@Injectable({
  providedIn: 'root',
})

//*----------------------------------------
//* Service
//*----------------------------------------
export class AuthService {
  //*----------------------------------------
  //* Constructor
  //*----------------------------------------
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  //*----------------------------------------
  //* Properties
  //*----------------------------------------

  private readonly baseUrl: string = environment.baseUrl;

  authStatus$ = new BehaviorSubject<AuthStatusEnum>(AuthStatusEnum.checking);

  //*----------------------------------------
  //* Methods
  //*----------------------------------------

  //? Method to save auth info
  private saveData(user: UserInterface, token: string): boolean {
    this.storageService.setItem('token', token);
    return true;
  }

  //? Login Method
  login(loginInterface: LoginInterface): Observable<boolean> {
    const url = `${this.baseUrl}/auth/login`;

    return this.httpClient
      .post<LoginResponseInterface>(url, loginInterface)
      .pipe(
        map(({ user, token }) => {
          this.saveData(user, token);
          return true;
        }),
        catchError((error) => {
          return new Observable<boolean>(error);
        })
      );
  }

  //? Verify Token Method
  verifyToken(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      return !isExpired;
    } catch (error) {
      return false;
    }
  }

  //? Verify Auth Method
  checkAuthStatus(): void {
    const token = this.storageService.getItem('token');

    if (token && this.verifyToken(token)) {
      this.authStatus$.next(AuthStatusEnum.authenticated);
    } else {
      this.authStatus$.next(AuthStatusEnum.notAuthenticated);
    }
  }
}
