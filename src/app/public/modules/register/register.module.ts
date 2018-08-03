import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterService } from './register.service';
import { FormsModule } from '@angular/forms';
import { ModalsModule } from '../../../modules/modals/modals.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    ModalsModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [RegisterService]
})
export class RegisterModule { }
