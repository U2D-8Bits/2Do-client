import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../presentation/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from '../routes/dashboard-routing.module';
import { AsideComponent } from '../../presentation/components';




@NgModule({
  declarations: [
    DashboardLayoutComponent,

    //* Components
    AsideComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [

    //* Components
    AsideComponent
  ]
})
export class DashboardModule { }
