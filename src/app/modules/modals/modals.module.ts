import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerDirective } from './directives/modal-container.directive';
import { AlertModalComponent } from './components/alert/alertModal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertModalComponent,
    ModalContainerDirective
  ],
  entryComponents: [
    AlertModalComponent
  ],
  exports: [ModalContainerDirective]
})
export class ModalsModule { }
