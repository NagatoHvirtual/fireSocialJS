import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserData } from '../../../../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public firebaseAuth: AngularFireAuth
  ) { }

  loginEmail(userData: UserData) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(userData.email, userData.password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }
}
