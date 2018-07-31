import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { ModalContainerDirective } from './directives/modal-container.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent,
    ModalContainerDirective
  ],
  entryComponents: [
    AlertComponent
  ],
  exports: [ModalContainerDirective]
})
export class ModalsModule { }
