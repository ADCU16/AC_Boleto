import { Injectable } from '@angular/core';

interface User {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  last_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor() { }

  loginUser(credential: User) {
    return new Promise((accept, reject) => {
      const user = this.users.find(user => user.email === credential.email && user.password === credential.password);
      if(user) {
        accept('Login correcto');
      } else {
        reject('Login incorrecto');
      }
    });
  }
  
  registerUser(userData: User) {
    return new Promise((accept, reject) => {
      if(userData.password != userData.confirm_password){
        reject('contraseñas no coinciden');
      } else {
        this.users.push(userData);
        accept('Registro correcto');
      }
    });
  }
}