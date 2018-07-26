import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { PublicComponent } from './public.component';
import { Code404Component } from '../modules/code404/code404.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: '', component: HomeComponent, data: { title: '' }, },
      { path: 'register', component: RegisterComponent, data: { title: 'Registrarse' } },
      { path: '**', component: Code404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
