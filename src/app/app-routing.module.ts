import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Code404Component } from './components/code404/code404.component';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/routing/home/home.component';
import { RegisterComponent } from './public/routing/register/register.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, data: { title: 'FireSocial' }, children: [
      { path: '', component: HomeComponent, data: { title: '' } },
      { path: 'register', component: RegisterComponent, data: { title: 'Registrarse' } },
      { path: '**', component: Code404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
