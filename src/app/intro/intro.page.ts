import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss'],
})
export class IntroPage {

  slides = [
    {
      title: "Hola, Bienvenido",
      classDescription:"descripcionTexto",
      description: "¡Gracias por instalar la app,recuerda que con nosotrostienes muchó más!", 
      Image: "../../assets/gif/techny-email-marketing-and-newsletter.gif",
      Button: ""
    },
    {
      title: "Seguridad",
      classDescription:"descripcionTexto",
      description: "Tranquilo, con nosotros túscompras están encriptadas ysiempre son seguras.",
      Image: "../../assets/gif/techny-secure-lock-and-key-successfully-unlocked.gif",
      Button: ""
    },
    {
      title: "Compras internacionales",
      classDescription:"descripcionTexto",
      description: "Compra tús boletos de eventospara cualquier parte del mundo.",
      Image: "../../assets/gif/techny-email-marketing-and-newsletter.gif",
      Button: ""
    },
    {
      title: "Mejores precios",
      classDescription:"descripcionTexto",
      description: "Siempre gastarás menosgracias a los descuentosen tús compras.",
      Image: "../../assets/gif/techny-dollar-coin-1.gif",
      Button: ""
    },
    {
      title: "Comienza ahora",
      classDescription:"descripcionTexto",
      description: "¡Empieza a disfrutar de nuestra app!",
      Image: "../../assets/gif/techny-launching-a-profitable-startup-project.gif",
      Button: "Comenzar"
    }
  ]

  constructor(
    // private router: Router,
    private storage: Storage,
    private navCtrl: NavController
    ){}

  goToHome(){
    console.log("go to home");
    this.navCtrl.navigateBack('menu/home');
  }
  
  ionViewWillEnter() {
    console.log("Ya entraste a la intro");
    //Vamos a guardar ne le storage que ya pasamos por la intro
    this.storage.set('TheBox', true);

  }

}

