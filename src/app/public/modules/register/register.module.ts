import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterService } from './register.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [RegisterService]
})
export class RegisterModule { }
