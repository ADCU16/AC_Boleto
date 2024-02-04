import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
    console.log('cerrar menu');
  }

  logOut() {
    this.navCtrl.navigateRoot('/login');
  }

  goToIntro(){
    console.log("go to intro");
    this.navCtrl.navigateForward('/intro');
    this.storage.set('TheBox', true);
  }

}
