//*---------------------------------------------------------
//* UI Module
//*---------------------------------------------------------

//? Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent, ButtonComponent, ToastComponent, ToastContainerComponent, DynamicModalComponent } from "../../presentation/ui";
import { UpdateProfileFormComponent } from "../../presentation/components";

//? NgModules
@NgModule({

  declarations: [
    InputComponent,
    ButtonComponent,
    ToastComponent,
    ToastContainerComponent,
    DynamicModalComponent,

    UpdateProfileFormComponent,

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

    UpdateProfileFormComponent,
  ]

})

export class UiModule {}
