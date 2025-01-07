import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from '../../presentation/layouts/auth-layout/auth-layout.component';
import { AuthRoutingModule } from '../routes/auth-routing.module';




@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
