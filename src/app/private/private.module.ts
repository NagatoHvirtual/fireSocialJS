import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { Code404Module } from '../modules/code404/code404.module';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    Code404Module
  ],
  declarations: [
    PrivateComponent
  ]
})
export class PrivateModule { }
