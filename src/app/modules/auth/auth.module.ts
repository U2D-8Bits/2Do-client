import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from '../../presentation/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent, SignupPageComponent } from '../../presentation/pages';
import { AuthRoutingModule } from '../routes/auth-routing.module';






@NgModule({
  declarations: [
    //? Layouts
    AuthLayoutComponent,

    //? Pages
    LoginPageComponent,
    SignupPageComponent,

    //? Components
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
