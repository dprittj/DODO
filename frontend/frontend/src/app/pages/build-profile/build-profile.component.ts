import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

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

  //added below ngOnInit method for authorization by checking for token
  currentUser: any;
  roles: string[] = [];
  isLoggedIn = false;

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
