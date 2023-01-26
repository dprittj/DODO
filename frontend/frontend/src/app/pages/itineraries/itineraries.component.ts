import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { ItinerariesService } from 'src/app/shared/services/itineraries.service';
import { Itinerary } from 'src/app/shared/models/itinerary.model';


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
  itineraries: Itinerary[] = new Array<Itinerary>();
  
  constructor(private _route: Router, private token: TokenStorageService, private itinerariesService: ItinerariesService) { }

  ngOnInit(): void {

    if(this.token.getToken()){
      this.isLoggedIn = true;
      this.roles = this.token.getUser().roles;
    }
    if(!this.isLoggedIn){
      this._route.navigateByUrl('/login');
    }
    this.currentUser = this.token.getUser();
    this.itineraries = this.itinerariesService.getAll();
    // this.itinerariesService.createNewItinerary(name, businessHours, address);

    new weatherWidget;//runs weather widget on init
    new initMap; //returns map
    runFindStuffMap();//finds search based of parameters
  
  }

}

