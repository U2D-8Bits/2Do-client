//***********************************************************************/
//* Imports
//***********************************************************************/
import { Component, OnInit } from '@angular/core';
import { StorageService, UserService } from '../../../application/services';
import { UserInterface } from '../../../core/domain/interfaces';
import { ModalService } from '../../../application/services/shared/modal.service';

//***********************************************************************/
//* @Component
//***********************************************************************/
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})

//***********************************************************************/
//* ProfilePageComponent
//***********************************************************************/
export class ProfilePageComponent implements OnInit {

  //***********************************************************************/
  //* Constructor
  //***********************************************************************/
  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private modalService: ModalService,
  ) { }

  //***********************************************************************/
  //* ngOnInit
  //***********************************************************************/
  ngOnInit(): void {

    const userID: number | null = Number(this.storageService.getSessionItem('ID'));

    this.userService.getUserDataByID(userID).subscribe({
      next: (response: UserInterface) => {
        this.userData = response;
        console.log(this.userData);
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  //***********************************************************************/
  //* Properties
  //***********************************************************************/
  userData: UserInterface | null = null;

  //***********************************************************************/
  //* Methods
  //***********************************************************************/

  //? Show modal
  showUpdateModal(): void {
    this.modalService.openModal(
      'Actualizar Perfil',
      'updateProfile',
    )
  }

}
