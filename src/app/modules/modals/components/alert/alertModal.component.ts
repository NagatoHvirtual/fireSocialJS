import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-alert',
  templateUrl: './alertModal.component.html',
  styleUrls: ['./alertModal.component.scss']
})
export class AlertModalComponent implements OnInit {
  public message: string;
  public destroy: VoidFunction

  constructor() {
  }

  ngOnInit() {
  }

  onRemoveComponent() {
    this.destroy();
  }

}
