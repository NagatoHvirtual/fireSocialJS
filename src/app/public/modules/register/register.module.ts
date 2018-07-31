import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterService } from './register.service';
import { FormsModule } from '@angular/forms';
import { PublicRoutingModule } from '../../public-routing.module';
import { ModalsModule } from '../../../modules/modals/modals.module';
import { Modals } from '../../../modules/modals/options/modals';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    PublicRoutingModule,
    ModalsModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [RegisterService, Modals]
})
export class RegisterModule { }
