import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';

 declare var weatherWidget: any;//imports weather widget script file
 declare var initMap: any;
 declare var runFindStuffMap: any;

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit {

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

    new weatherWidget;//runs weather widget on init
    new initMap; //returns map
    runFindStuffMap();//finds search based of parameters
  
  }

}


