import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    public firebaseAuth: AngularFireAuth
  ) { }
  
  registerUser(userData: UserData) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }
}
