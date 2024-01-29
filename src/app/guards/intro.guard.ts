import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: Storage
    ) { }
  async canActivate() {
    const pasePorIntro = await this.storage.get('TheBox');
    if (pasePorIntro) {
      return true;
    } else {
      this.router.navigateByUrl('/intro');
      return false;
    }
      
      
  }
  
}
