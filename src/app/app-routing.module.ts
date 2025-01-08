import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './presentation/pages/error-page/error-page.component';

//*---------------------------------------------------------
//* Routes
//*---------------------------------------------------------
const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorPageComponent,
    pathMatch: 'full'
  }
];


//*---------------------------------------------------------
//* NgModule
//*---------------------------------------------------------
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
