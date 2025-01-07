import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//*---------------------------------------------------------
//* Routes
//*---------------------------------------------------------
const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/routes/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./modules/routes/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'',
    redirectTo: '',
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
