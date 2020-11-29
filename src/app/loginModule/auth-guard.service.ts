import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _loginService: LoginService, private _router: Router) { }

  //checks user for logged in or not, if not send to login page
  canActivate() {
    if(this._loginService.isLoggedIn) {
      return true;
    }

    //imperative navigation
    this._router.navigate(['login'])
    return false
  }

  
}
