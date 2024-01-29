import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private storage: Storage) { }

    async canActivate() {
    const userLoggedIn = await this.storage.get('userLoggedIn');
    if (userLoggedIn) {
      console.log('Usuario logueado');
      return true;
    } else {
      console.log('Usuario no logueado');
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
