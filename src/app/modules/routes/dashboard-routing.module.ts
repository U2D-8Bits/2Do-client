import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from '../../presentation/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent, ProfilePageComponent } from '../../presentation/pages';



const routes: Routes = [
  { path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        title: 'Inicio',
        component: DashboardComponent,
      },
      {
        path: 'profile',
        title: 'Perfil',
        component: ProfilePageComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
