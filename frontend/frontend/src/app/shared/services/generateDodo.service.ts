import { Injectable } from '@angular/core';
import { Dodo } from '../models/generateDodo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class DodoService {

  //API links below determine which page the restAPI is pulling information from
 API = 'http://localhost:8080/api/';

  constructor(private _http: HttpClient) { }

  //createNewUser takes in a username and password and hands it to the backend 
  // to store in the database
  generateDodo(travelDistance: String,
    priceRange: String,
    numberOfDodos: String,
    referenceInterests: Boolean,
    music: Boolean,
    outdoors: Boolean,
    gaming: Boolean,
    nature: Boolean,
    art: Boolean,
    sports: Boolean,
    nightlife: Boolean,
    food: Boolean,
    history: Boolean,
    science_technology: Boolean,
    culture: Boolean,
    fashion: Boolean, books: Boolean, movies: Boolean, health_wellness: Boolean): Observable<any>{
    return this._http.post(this.API + "generate", {
      travelDistance,
      priceRange,
      numberOfDodos,
      referenceInterests,
      music,
      outdoors,
      gaming,
      nature,
      art,
      sports,
      nightlife,
      food,
      history,
      science_technology,
      culture,
      fashion,
      books,
      movies, 
      health_wellness 
  }, httpOptions);
  }

}
