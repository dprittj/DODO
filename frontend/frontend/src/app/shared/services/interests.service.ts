import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Interests } from "../models/interests.model";
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
    providedIn: 'root'
})

export class InterestsService {

    API = 'http://localhost:8080/api';

    constructor(private _http: HttpClient) {}

    saveInterests(music: Boolean,
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
        fashion: Boolean,
        books: Boolean,
        movies: Boolean, 
        health_wellness: Boolean): Observable<any>{
        return this._http.post(this.API, {
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