import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  event_list : any; 

  constructor(
    private router: Router,
    private storage: Storage,
    private eventsService: EventsService
    ){}

    ionViewDidEnter(){
      this.eventsService.getEvents().then(
        events => {
          this.event_list = events;
          console.log("Eventos del servidor",this.event_list)
        }
      )
      console.log("local events",this.eventsService.getLocalEvents().events)
    }


  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
    this.storage.set('TheBox', true);
  }

}

