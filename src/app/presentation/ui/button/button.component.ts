import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  //*------------------------------------------
  //* Button Properties
  //*------------------------------------------

  @Input()type: string = 'button';
  @Input()disabled: boolean = false;
  @Input() loading: boolean = false;

  //? Button Click Event
  @Output() onClick = new EventEmitter<any>();


  //*------------------------------------------
  //* Button Methods
  //*------------------------------------------
  //? On Button Click Event
  onClickEvent(){
    if( !this.loading ){
      this.onClick.emit();
    }
  }
}
