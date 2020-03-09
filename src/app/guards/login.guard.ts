import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';

import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  //esta instruccion va a esperar hasta que la funcion se ejecute.
  constructor(private storage: Storage, private router: Router){}
  async canActivate(){
    
    const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
    if(isUserLoggedIn){
      return true;
    }else{
      this.router.navigateByUrl('/login');
    }
  }
}
