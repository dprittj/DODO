import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submitpoi',
  templateUrl: './submitpoi.component.html',
  styleUrls: ['./submitpoi.component.scss']
})
export class SubmitpoiComponent implements OnInit {

  form: any ={
    nameOfPoi: null,
    address: null,
    businessHours: null,
    taggedInterests: null,
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

  submitpoi() {

  }

}

