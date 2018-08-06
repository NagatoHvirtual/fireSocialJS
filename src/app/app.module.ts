import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

/**
 * Componentes
 */
import { AppComponent } from './app.component';

/**
 * Modulos
 */
import { Code404Module } from './modules/code404/code404.module';
import { ModalsModule } from './modules/modals/modals.module';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Code404Module,
    ModalsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
