import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../../models/user-data';
import { LoginService } from './login.service';
import { Modals } from '../../../../../modules/modals/options/modals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: UserData = new UserData();
  isLoading: boolean = false;

  constructor(
    public loginServices: LoginService,
    public modal: Modals
  ) { }

  ngOnInit() {
  }

  public onLoginEmail() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.loginServices.loginEmail(this.userData)
        .then(res => {
          this.isLoading = false;
          console.log(res);
        })
        .catch(err => {
          this.isLoading = false;
          this.modal.alert(err.message);
        });
    }
  }

}
