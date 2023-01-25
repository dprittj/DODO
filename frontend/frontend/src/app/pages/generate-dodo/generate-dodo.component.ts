import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-dodo',
  templateUrl: './generate-dodo.component.html',
  styleUrls: ['./generate-dodo.component.scss']
})
export class GenerateDodoComponent implements OnInit {

  travelDistance = [
    {name: "How Far are you willing to Travel?"},
    {name: "Less than 2 miles", value: "3219"},
    {name: "Less than 10 miles", value: "16094"},
    {name: "Less than 20 miles", value: "32187"},
    {name: "Less than 30 miles", value: "49000"},
  ]

  priceRanges = [
    {name: "Price Range"},
    {name: "$", value: "1"},
    {name: "$$", value: "2"},
    {name: "$$$", value:"4"},
  ]

  dodos = [
    {name: "Number of Itinerary Items"},
    {name: "1 item: Up to 2 hours Available", value:"1"},
    {name: "2 item: Up to 4 hours Available", value:"2"},
    {name: "3 item: Up to 6 hours Available", value:"3"},
    {name: "4 item: Up to 8 hours Available", value:"4"},
  ];


  form: any ={
    travelDistance: null,
    priceRange: null,
    numberOfDodos: null,
  };

  interests: any = {
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
  };

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
  
  }

  generate(): void {
    console.log(this.form.travelDistance);
    console.log(this.form.priceRange);
    console.log(this.form.numberOfDodos);
    // console.log(this.form.referenceInterests);
    let selections = [];
    let keyList = Object.keys(this.interests);
    for(let i = 0; i < keyList.length; i++) {
      //console.log(this.form[keyList[i]]);
      if(this.interests[keyList[i]] == true) {
        selections.push(keyList[i]);
      }
    }
    //console.log(selections);
    
      this._route.navigate(['/itineraries'], {queryParams: {query: selections.join('&'), travelDistance: this.form.travelDistance, priceRange: this.form.priceRange, itineraryItems: this.form.numberOfDodos}});
    
  }

  travelDistanceChanged(time: any) {
    if(time == 'How Far are you willing to Travel?') {
      this.form.travelDistance = null;
    }
    else {
      console.log(time.value);
      this.form.travelDistance = time;
    }
  }

  priceRangeChanged(value: any) {
    if(value == 'Price Range') {
      this.form.priceRange = null;
    }
    else {
      this.form.priceRange = value;
    }
  }

  dodoChanged(dodo: any) {
    if(dodo == 'Number of Itinerary Items') {
      this.form.numberOfDodos = null;
    }
    else {
      this.form.numberOfDodos = dodo;
    }
  }

}
