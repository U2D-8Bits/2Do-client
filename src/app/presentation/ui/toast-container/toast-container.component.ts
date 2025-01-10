//*-------------------------------------------
//* Import
//*-------------------------------------------
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../application/services/toast.service';
import { ToastInterface } from '../../../core/domain/interfaces';


//*-------------------------------------------
//* Component
//*-------------------------------------------
@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.css'
})


//*-------------------------------------------
//* Toast Container Component
//*-------------------------------------------
export class ToastContainerComponent implements OnInit {

  //*-------------------------------------------
  //* Constructor
  //*-------------------------------------------
  constructor(
    private toastService: ToastService,
  ) { }

  //*-------------------------------------------
  //* Properties
  //*-------------------------------------------
  toasts: ToastInterface[] = [];

  //*-------------------------------------------
  //* On Init
  //*-------------------------------------------
  ngOnInit() {
    this.toastService.toasts$.subscribe( (toasts) => {
      this.toasts = toasts;
    })
  }

}
