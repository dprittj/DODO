import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

declare var weatherWidget: any;//imports weather widget script file

@Component({
  selector: 'app-generate-dodo',
  templateUrl: './generate-dodo.component.html',
  styleUrls: ['./generate-dodo.component.scss']
})
export class GenerateDodoComponent implements OnInit {

  form: any ={
    travelDistance: null,
    priceRange: null,
    numberOfDodos: null,
    referenceInterests: null,
    music: null,
    outdoors: null,
    gaming: null,
    nature: null,
    art: null,
    sports: null,
    nightlife: null,
    food: null,
    history: null,
    science_technology: null,
    culture: null,
    fashion: null,
    books: null,
    movies: null,
    health_wellness: null
  }

  currentUser: any;
  roles: string[] = [];
  isLoggedIn = false;
  isSuccessful = false;
  
  constructor(private _route: Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    if(this.token.getToken()){
      this.isLoggedIn = true;
      this.roles = this.token.getUser().roles;
    }
    if(!this.isLoggedIn){
      this._route.navigateByUrl('/login');
    }
    this.currentUser = this.token.getUser();

    new weatherWidget;//runs weather widget on init
  
  }

  generate() {}

}
