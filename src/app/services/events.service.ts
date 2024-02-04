import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  urlServer = "http://190.131.209.106";
  //back url de categorias  Omar Vega
  urlAnyCategory = "https://ticketsback-8b471a057f17.herokuapp.com";

  constructor() { }

  getEvents() {
    return fetch(`${this.urlServer}/events`).then(
      response => response.json()
    );
  }

  getLocalEvents() {
    return dataEvents;
  }

  getCategoryEvents() {
    return fetch(`${this.urlServer}/categories`).then(
      response => response.json()
    );
  }

  getEventById(id: number) {
    return fetch(`${this.urlServer}/categories/${id}`).then(
      response => response.json()
    );
  }
  //obtener categorias "get hacia /categories
  // obtener 1 categoria "get hacia /categories/:id"
  //
}