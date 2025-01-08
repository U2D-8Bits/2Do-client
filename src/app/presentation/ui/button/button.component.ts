import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  //*------------------------------------------
  //* Button Properties
  //*------------------------------------------

  //? Button Text
  @Input()label: string = '';

  //? Button Type
  @Input()type: string = 'button';

  //? Button Disabled
  @Input()disabled: boolean = false;

  //? Button Click Event
  @Output() onClick = new EventEmitter<any>();


  //*------------------------------------------
  //* Button Methods
  //*------------------------------------------
  //? On Button Click Event
  onClickEvent(){
    this.onClick.emit();
  }
}
