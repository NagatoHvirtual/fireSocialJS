import { Component, OnInit } from '@angular/core';
import { UserData } from './user-data';
import { RegisterService } from './register.service';
import { ThrowStmt } from '../../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userData: UserData = new UserData();

  constructor(
    public registerService: RegisterService
  ) { }

  ngOnInit() {
  }

  onRegisterEmail () {
    this.registerService.registerUser(this.userData)
      .then(res => {
        console.log('Welcome', res);
      }).catch(err => {
        console.log('Sorry', err);
      });
  }

}
