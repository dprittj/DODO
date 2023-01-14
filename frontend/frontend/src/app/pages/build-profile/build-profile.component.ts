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
    // username: null,
    location: null,
    music: null,
    art: null,
    outdoors: null,
    gaming: null,
    nature: null,
    painting: null,
    photography: null,
    sports: null,
    nightlife: null,
    food: null,
    history: null,
    sciencetech: null,
    culture: null,
    fashion: null,
    books: null

  }

  isLoggedIn = false;

  constructor(private _route: Router) { }

  ngOnInit(): void {

  }

  buildProfile(): void {
    const { location,
      music,
      art,
      outdoors,
      gaming,
      nature,
      painting,
      photography,
      sports,
      nightlife,
      food,
      history,
      sciencetech,
      culture,
      fashion,
      books } = this.form;
    console.log(this.form);

    this._route.navigateByUrl('/mynest');
  }

}
