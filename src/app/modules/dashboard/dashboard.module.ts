import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../presentation/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from '../routes/dashboard-routing.module';
import { AsideComponent, NavbarComponent } from '../../presentation/components';
import { DashboardComponent, ProfilePageComponent } from '../../presentation/pages';




@NgModule({
  declarations: [
    DashboardLayoutComponent,

    //* Components
    AsideComponent,
    NavbarComponent,

    //* Pages
    DashboardComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [

    //* Components
    AsideComponent,
    NavbarComponent,

    //* Pages
    DashboardComponent,
    ProfilePageComponent
  ]
})
export class DashboardModule { }
