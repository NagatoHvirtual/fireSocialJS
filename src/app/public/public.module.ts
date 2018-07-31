import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RegisterModule } from './modules/register/register.module';
import { HomeModule } from './modules/home/home.module';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Code404Module } from '../modules/code404/code404.module';
import { ModalsModule } from '../modules/modals/modals.module';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    RegisterModule,
    HomeModule,
    Code404Module,
    ModalsModule
  ],
  declarations: [
    PublicComponent,
    NavbarComponent
  ],
  bootstrap: [PublicComponent]
})
export class PublicModule { }
