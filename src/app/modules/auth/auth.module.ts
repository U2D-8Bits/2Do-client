import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from '../../presentation/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent, SignupPageComponent } from '../../presentation/pages';
import { AuthRoutingModule } from '../routes/auth-routing.module';
import { SigUpFormComponent } from '../../presentation/components';
import { InputComponent } from '../../presentation/ui';
import { UiModule } from '../ui/ui.module';






@NgModule({
  declarations: [
    //? Layouts
    AuthLayoutComponent,

    //? Pages
    LoginPageComponent,
    SignupPageComponent,

    //? Components
    SigUpFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UiModule
  ]
})
export class AuthModule { }
