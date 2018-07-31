import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[modalContainer]',
  host: {
    '[style.position]': '"fixed"',
    '[style.width]': '"100vw"',
    '[style.height]': '"100vh"',
    '[style.z-index]': '"999999999"',
    '[style.top]': '"0"'
  }
})
export class ModalContainerDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.className += 'modal-container';
    this.el.nativeElement.style.background = 'rgba(0, 0, 0, 0.4)';
  }


  @Input() set modalBgColor(color: string) {
    this.el.nativeElement.style.background = color;
  }

  @Input() set modalClass(addClass: string) {
    this.el.nativeElement.className += ' ' + addClass;
  }

}
