import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  //*---------------------------------------------------------
  //* Input Properties
  //*---------------------------------------------------------
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

}
