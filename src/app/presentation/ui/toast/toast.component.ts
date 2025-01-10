import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {

  //*----------------------------------------------------
  //* Constructor
  //*----------------------------------------------------
  constructor(){}

  //*----------------------------------------------------
  //* Properties
  //*----------------------------------------------------

  @Input() type: 'success' | 'error' | 'warning' = 'success';
  @Input() message: string = '';
  @Input() duration: number = 2000;

  isVisible: boolean = true;
  private timeOut: any;

  //*----------------------------------------------------
  //* Methods
  //*----------------------------------------------------

  closeToast(): void {
    this.isVisible = false;
    if( this.timeOut){
      clearTimeout(this.timeOut);
    }
  }

  //*----------------------------------------------------
  //* ngOnInit
  //*----------------------------------------------------
  ngOnInit(): void {
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, this.duration - 300); // Retrae antes de eliminar
  }

}
