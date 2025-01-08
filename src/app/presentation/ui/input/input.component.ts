import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent ),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  //*---------------------------------------------------------
  //* Input Properties
  //*---------------------------------------------------------
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

  value:string = '';

  //*---------------------------------------------------------
  //* ControlValueAccessor Implementation
  //*---------------------------------------------------------

  //? Callbacks
  onChange: any = () => {};
  onTouched: any = () => {};

  //? Methods

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement)?.value || '';
    this.value = inputValue;
    this.onChange(inputValue);
    this.onTouched();
  }

}
