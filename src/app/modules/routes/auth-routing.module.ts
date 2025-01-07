import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../../presentation/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from '../../presentation/pages/login-page/login-page.component';
import { SignupPageComponent } from '../../presentation/pages/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        title: 'Iniciar Sesión',
        component: LoginPageComponent,
      },
      {
        path: 'sign-up',
        title: 'Registro',
        component: SignupPageComponent,
      },
      {
        path: '',
        redirectTo:'login',
        pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
