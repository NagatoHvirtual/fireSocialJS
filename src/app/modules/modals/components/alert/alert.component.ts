import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  public message: string;

  constructor() { 
  }

  ngOnInit() {
  }

}
