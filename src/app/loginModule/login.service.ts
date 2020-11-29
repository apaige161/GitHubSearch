import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  login(username, password) {
    if(username === "jason" && password === "123") {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
