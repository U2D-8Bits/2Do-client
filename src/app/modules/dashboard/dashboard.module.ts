import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../presentation/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from '../routes/dashboard-routing.module';




@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
