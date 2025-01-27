//************************************************************/
//* Imports
//************************************************************/
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

//************************************************************/
//* Component
//************************************************************/
@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrl: './dynamic-dialog.component.css'
})

//************************************************************/
//* Class
//************************************************************/
export class DynamicDialogComponent {

  //************************************************************/
  //* Properties
  //************************************************************/

  @Input() title: string = '';
  @Input() content: string | null = null;
  @Input() isVisible: boolean = false;
  @Input() confirmText: string = 'Confirmar';
  @Input() cancelText: string = 'Cancelar';

  @Output() onConfirm = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  //************************************************************/
  //* Methods
  //************************************************************/

  //? Método para confirmar
  handleConfirm(): void {
    this.onConfirm.emit();
  }

  //? Método para cancelar
  handleCancel(): void {
    this.onCancel.emit();
  }


}
