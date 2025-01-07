import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from '../../presentation/layouts/auth-layout/auth-layout.component';
import { AuthRoutingModule } from '../routes/auth-routing.module';
import { LoginPageComponent } from '../../presentation/pages/login-page/login-page.component';
import { SignupPageComponent } from '../../presentation/pages/signup-page/signup-page.component';




@NgModule({
  declarations: [
    AuthLayoutComponent,

    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
