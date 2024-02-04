import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm : FormGroup;
  validation_messages = { 
    email: [
      {type: 'required', message: 'Email is requerido.'},
      {type: 'pattern', message: 'Porfavor ingresa un email valido.'}
    ],
    password: [
      {type: 'required', message: 'Contraseña es requireda.'},
      {type: 'minlength', message: 'Contraseña debe tener minimó 6 caracteres de longitud.'},
      {type: 'maxlength', message: 'Contraseña no debe tenere más de 20 caracteres de longitud.'},
    ],
    confirm_password: [
      {type: 'required', message: 'Confirmar contraseña es requerido.'},
      {type: 'notSame', message: 'Contraseña y confirmar contraseña no coinciden.'},
      {type: 'minlength', message: 'Contraseña debe tener minimó 6 caracteres de longitud.'}
    
    ],
    name: [
      {type: 'required', message: 'Nombre es requerido.'},
      {type: 'minlength', message: 'Nombre debe tener minimó 3 caracteres de longitud.'},
      {type: 'maxlength', message: 'Nombre no debe tenere más de 20 caracteres de longitud.'},
      {type: 'pattern', message: 'Nombre solo debe contener letras.'}
    ],
    last_name: [
      {type: 'required', message: 'Apellido es requerido.'},
      {type: 'minlength', message: 'Apellido debe tener minimó 3 caracteres de longitud.'},
      {type: 'maxlength', message: 'Apellido no debe tenere más de 20 caracteres de longitud.'},
      {type: 'pattern', message: 'Nombre solo debe contener letras.'}
    ]
  }
  
  registerMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private storage: Storage,
    private navCtrl: NavController,
    private authService: AuthService

  ) { 
    this.registerForm = this.formBuilder.group({
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
          Validators.minLength(6)])),
      confirm_password: new FormControl(
        '', 
        Validators.compose([
          Validators.required,
          Validators.maxLength(20), 
          Validators.minLength(6),])),
      name: new FormControl(
        '', 
        Validators.compose([
          Validators.required,
          Validators.maxLength(20), 
          Validators.minLength(3),
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúÑñÜü]+$')])),
      last_name: new FormControl(
        '', 
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúÑñÜü]+$')])),
        },
  // { validators: this.checkPasswords }
  );
  }
  // checkPasswords(group: FormGroup) {
  //   let pass = group.controls['password'] ? group.controls['password'].value : null;
  //   let confirmPass = group.controls['confirm_password'] ? group.controls['confirm_password'].value : null;
  
  //   return pass === confirmPass ? null : { notSame: true }     
  // }

  ngOnInit() {
  }

  
  register(register_data : any){
    
    this.authService.registerUser(register_data).then((response) => {
      this.registerMessage = response;
      this.storage.set('userRegister', true);
      this.navCtrl.navigateForward('/login');
    }).catch((error) => {
      this.registerMessage = error;
    });
  }

  goToLogin(){
    this.navCtrl.navigateBack('/login');
  }


}
