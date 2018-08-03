import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginService } from './components/login/login.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  providers: [LoginService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
