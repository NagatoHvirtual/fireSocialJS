import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import *  as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(
    public firebaseAuth: AngularFireAuth
  ) { }

  loginUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  getAuth() {
    return this.firebaseAuth.authState.pipe(map(auth => auth));
  }
}
