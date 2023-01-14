import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build-profile',
  templateUrl: './build-profile.component.html',
  styleUrls: ['./build-profile.component.scss']
})
export class BuildProfileComponent implements OnInit {

  form: any = {
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

  isLoggedIn = false;

  constructor(private _route: Router) { }

  ngOnInit(): void {

  }

  buildProfile(): void {
    const { 
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
    } = this.form;
    console.log(this.form);

    this._route.navigateByUrl('/mynest');
  }

}
