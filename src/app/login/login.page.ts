import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;
  validation_messages = { 
    email: [
      {type: 'required', message: 'Email is requerido.'},
      {type: 'pattern', message: 'Porfavor ingresa un email valido.'}
    ],
    password: [
      {type: 'required', message: 'Contraseña es requireda.'},
      {type: 'minlength', message: 'Contraseña debe tener minimó 6 caracteres de longitud.'},
      {type: 'maxlength', message: 'Contraseña no debe tenere más de 20 caracteres de longitud.'},
    ]
  }
  loginMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storage: Storage,
    // private router: Router,
    private navCtrl: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '', 
        Validators.compose([
          Validators.required, 
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
      password: new FormControl(
        '', 
        Validators.compose([
          Validators.required,
          Validators.maxLength(20), 
          Validators.minLength(6)]))
    })
  }

  ngOnInit() {
  }

  login(login_data : any){

    this.authService.loginUser(login_data).then((response) => {
      this.loginMessage = response;
      this.storage.set('userLoggedIn', true);
      this.navCtrl.navigateForward('menu/home');
      // this.router.navigateByUrl('/home');
    }).catch((error) => {
      this.loginMessage = error;
    });
  }
}
