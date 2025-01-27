//*******************************************************/
//* Imports
//*******************************************************/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalInterface } from '../../../core/domain/interfaces';

//*******************************************************/
//* Injectable
//*******************************************************/
@Injectable({
  providedIn: 'root'
})

//*******************************************************/
//* Service
//*******************************************************/
export class ModalService {

  //? Modal State
  private modalStateSubject = new BehaviorSubject<ModalInterface>({
    isVisible: false,
    title: '',
    content: '',
  });

  //? Modal State Observable
  modalState$ = this.modalStateSubject.asObservable();

  //? Show Modal
  openModal(title: string, content: string): void {
      this.modalStateSubject.next({
        isVisible: true,
        title,
        content
      })
  }

  //? Close Modal
  closeModal(): void {
    this.modalStateSubject.next({
      isVisible: false,
      title: '',
      content: ''
    })
  }

}
