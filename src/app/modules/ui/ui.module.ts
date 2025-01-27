//*---------------------------------------------------------
//* UI Module
//*---------------------------------------------------------

//? Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent, ButtonComponent, ToastComponent, ToastContainerComponent, DynamicModalComponent } from "../../presentation/ui";

//? NgModules
@NgModule({

  declarations: [
    InputComponent,
    ButtonComponent,
    ToastComponent,
    ToastContainerComponent,
    DynamicModalComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ToastComponent,
    ToastContainerComponent,
    DynamicModalComponent,
  ]

})

export class UiModule {}
