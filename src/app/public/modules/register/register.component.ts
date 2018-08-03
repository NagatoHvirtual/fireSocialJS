import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Modals } from '../../../modules/modals/options/modals';
import { UserData } from '../../models/user-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userData: UserData = new UserData();

  constructor(
    public registerService: RegisterService,
    public modal: Modals
  ) { }

  ngOnInit() {
  }

  onRegisterEmail () {
    this.registerService.registerUser(this.userData)
      .then(res => {
        console.log('Welcome', res);
      }).catch(err => {
        this.modal.alert(err.message);
      });
  }

}
