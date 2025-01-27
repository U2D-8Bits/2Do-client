//*******************************************************/
//* Imports
//*******************************************************/
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../application/services/shared/modal.service';


//*******************************************************/
//* Component
//*******************************************************/
@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrl: './dynamic-modal.component.css'
})

//*******************************************************/
//* Class
//*******************************************************/
export class DynamicModalComponent implements OnInit {

  //*********************************************/
  //* Constructor
  //*********************************************/
  constructor(
    private modalService: ModalService
  ){}

  //*********************************************/
  //* Properties
  //*********************************************/
  isVisible: boolean = false;
  title: string = '';
  content: string = '';

  //*********************************************/
  //* Lifecycle
  //*********************************************/
  //? On Init
  ngOnInit(): void {
    this.modalService.modalState$.subscribe((state) =>{
      this.isVisible = state.isVisible;
      this.title = state.title;
      this.content = state.content;
    })
  }

  //? On Destroy
  ngOnDestroy(): void {
  }

  //*********************************************/
  //* Methods
  //*********************************************/

  //? Close Modal
  closeModal(): void {
    this.modalService.closeModal();
  }

}
