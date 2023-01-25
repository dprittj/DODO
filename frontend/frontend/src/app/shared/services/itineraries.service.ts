import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Itinerary } from '../models/itinerary.model'; 

@Injectable({
  providedIn: 'root'
})
export class ItinerariesService {

  itineraries: Itinerary[] = new Array<Itinerary>();

  constructor() { }

  getAll() {
    return this.itineraries;
  }

  get(id: number) {
    return this.itineraries[id];
  }

  getId(itinerary: Itinerary) {
    return this.itineraries.indexOf(itinerary);
  }

  add(itinerary: Itinerary) {
    //this method will add a note to the itineraries array and return the id of the itinerary
    //where the id = index
    let newLength = this.itineraries.push(itinerary);
    let index = newLength - 1;
    return index;
  }

  delete(id: number) {
    this.itineraries.splice(id, 1);
  }
}
