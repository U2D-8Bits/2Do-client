//*---------------------------------------------------------
//* UI Module
//*---------------------------------------------------------

//? Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "../../presentation/ui";

//? NgModules
@NgModule({

  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent
  ]

})

export class UiModule {}
