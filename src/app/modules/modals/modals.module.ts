import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerDirective } from './directives/modal-container.directive';
import { AlertModalComponent } from './components/alert/alertModal.component';
import { Modals } from './options/modals';

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
  exports: [ModalContainerDirective],
  providers: [Modals]
})
export class ModalsModule { }
