//*---------------------------------------------------------
//* UI Module
//*---------------------------------------------------------

//? Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "../../presentation/ui";
import { ButtonComponent } from "../../presentation/ui/button/button.component";

//? NgModules
@NgModule({

  declarations: [
    InputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent
  ]

})

export class UiModule {}
