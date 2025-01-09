import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from '../../presentation/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent, SignupPageComponent } from '../../presentation/pages';
import { AuthRoutingModule } from '../routes/auth-routing.module';
import { LoginFormComponent, SigUpFormComponent } from '../../presentation/components';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    //? Layouts
    AuthLayoutComponent,

    //? Pages
    LoginPageComponent,
    SignupPageComponent,

    //? Components
    SigUpFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,

    UiModule,
  ]
})
export class AuthModule { }
