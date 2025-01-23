//*-----------------------------------------
//* Import
//*-----------------------------------------
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {
  CreateUserInterface,
  UserInterface,
} from '../../../core/domain/interfaces';
import { catchError, map, Observable, throwError } from 'rxjs';

//*-----------------------------------------
//* Injectable
//*-----------------------------------------
@Injectable({
  providedIn: 'root',
})

//*-----------------------------------------
//* Export Class
//*-----------------------------------------
export class UserService {
  //*-----------------------------------------
  //* Constructor
  //*-----------------------------------------
  constructor(private httpClient: HttpClient) {}

  //*-----------------------------------------
  //* Properties
  //*-----------------------------------------

  private readonly baseUrl: string = environment.baseUrl;

  //*-----------------------------------------
  //* Register User
  //*-----------------------------------------

  registerUser(createUser: CreateUserInterface): Observable<UserInterface> {
    const url = `${this.baseUrl}/users`;

    return this.httpClient.post<UserInterface>(url, createUser).pipe(
      map((response: UserInterface) => response),
      catchError((error: any) => throwError(error))
    );
  }

  //*-----------------------------------------
  //* Get User Data by ID
  //*-----------------------------------------
  getUserDataByID(id: number): Observable<UserInterface>{
    const url = `${this.baseUrl}/users/${id}`;

    return this.httpClient.get<UserInterface>(url).pipe(
      map((response: UserInterface) => response),
      catchError((error: any) => throwError(error))
    )
  }

}
