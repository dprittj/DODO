import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InterestsService } from 'src/app/shared/services/interests.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  // form: any = {
  //   music: null,
  //   outdoors: null,
  //   gaming: null,
  //   nature: null,
  //   art: null,
  //   sports: null,
  //   nightlife: null,
  //   food: null,
  //   history: null,
  //   science_technology: null,
  //   culture: null,
  //   fashion: null,
  //   books: null,
  //   movies: null,
  //   health_wellness: null
  // }

  currentUser: any;
  isLoggedIn = false;
  roles: string[] = [];

  interests: string[];

  constructor(private _route: Router, private token: TokenStorageService, private _service: InterestsService) { this.interests = [
    "Music",
    "Outdoors",
    "Gaming",
    "Nature",
    "Art",
    "Sports",
    "Nightlife",
    "Food",
    "History",
    "Science/Tech",
    "Culture",
   "Fashion",
    "Books",
    "Movies", 
    "Health/Wellness"
  ];}

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

  generateLink(): void {
    this._route.navigateByUrl('/generate');
  }

  editInterestsLink(): void {
    this._route.navigateByUrl('/buildnest');
  }

  itinerariesLink(): void {
    this._route.navigateByUrl('/itineraries');
  }

//   addInterests() {
//     const { 
//       music,
//       outdoors,
//       gaming,
//       nature,
//       art,
//       sports,
//       nightlife,
//       food,
//       history,
//       science_technology,
//       culture,
//       fashion,
//       books,
//       movies, 
//       health_wellness 
//     } = this.form;
//       this._service.saveMoreInterests(music,
//       outdoors,
//       gaming,
//       nature,
//       art,
//       sports,
//       nightlife,
//       food,
//       history,
//       science_technology,
//       culture,
//       fashion,
//       books,
//       movies, 
//       health_wellness).subscribe(
//       data=>{
//         console.log("Interests Added");
//         console.log(data);
//   }
// );

  // }

}
