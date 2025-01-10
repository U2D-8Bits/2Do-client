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
  @Input() duration: number = 3000;

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
    if( this.duration > 0 ){
      this.timeOut = setTimeout(() => this.closeToast(), this.duration);
    }
  }

}
