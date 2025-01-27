//*---------------------------------------------------------
//* UI Module
//*---------------------------------------------------------

//? Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent, ButtonComponent, ToastComponent, ToastContainerComponent } from "../../presentation/ui";
import {  } from "../../presentation/ui/button/button.component";

//? NgModules
@NgModule({

  declarations: [
    InputComponent,
    ButtonComponent,
    ToastComponent,
    ToastContainerComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ToastComponent,
    ToastContainerComponent,
  ]

})

export class UiModule {}
