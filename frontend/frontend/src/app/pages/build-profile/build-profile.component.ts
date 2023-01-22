import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InterestsService } from 'src/app/shared/services/interests.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-build-profile',
  templateUrl: './build-profile.component.html',
  styleUrls: ['./build-profile.component.scss']
})
export class BuildProfileComponent implements OnInit {

  form: any = {
    music: false,
    outdoors: false,
    gaming: false,
    nature: false,
    art: false,
    sports: false,
    nightlife: false,
    food: false,
    history: false,
    science_technology: false,
    culture: false,
    fashion: false,
    books: false,
    movies: false,
    health_wellness: false
  }

  //added below ngOnInit method for authorization by checking for token
  currentUser: any;
  roles: string[] = [];
  isLoggedIn = false;

  constructor(private _route: Router, private token: TokenStorageService, private _service: InterestsService) { }

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
    this._service.saveInterests(music,
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
      health_wellness).subscribe(
      data=>{
        console.log("Interests Saved");
        console.log(data);
        this._route.navigateByUrl('mynest');
      }
    );

    
  }


}
