import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';

/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './public/routing/home/components/login/login.component';
import { PublicComponent } from './public/public.component';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { RegisterComponent } from './public/routing/register/register.component';
import { HomeComponent } from './public/routing/home/home.component';
import { Code404Component } from './components/code404/code404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
