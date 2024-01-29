import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

  constructor(private router: Router, private storage: Storage) { }

    async canActivate() {
    const userRegister = await this.storage.get('userRegister');
    if (userRegister) {
      console.log('Usuario registrado');
      return true;
    } else {
      console.log('Usuario no registrado');
      this.router.navigateByUrl('/register');
      return false;
    }
  }
}
