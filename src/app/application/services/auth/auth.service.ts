//*----------------------------------------
//* Imports
//*----------------------------------------
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginInterface, LoginResponseInterface, UserInterface } from '../../../core/domain/interfaces';
import { catchError, map, Observable } from 'rxjs';
import { StorageService } from '../storage.service';

//*----------------------------------------
//* Injectable
//*----------------------------------------
@Injectable({
  providedIn: 'root'
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
  ){}


  //*----------------------------------------
  //* Properties
  //*----------------------------------------

  private readonly baseUrl: string = environment.baseUrl;

  //*----------------------------------------
  //* Methods
  //*----------------------------------------

  //? Method to save auth info
  private saveData(user: UserInterface, token: string): boolean{
    this.storageService.setItem('token', token);
    return true;
  }

  //? Login Method
  login(loginInterface: LoginInterface): Observable<boolean>{

    const url = `${this.baseUrl}/auth/login`;

    return this.httpClient.post<LoginResponseInterface>(url, loginInterface)
    .pipe(
      map( ({user, token}) =>{
        this.saveData(user, token);
        return true;
      }),
      catchError( error => {
        return new Observable<boolean>(error)
      })
    )
  }

}
