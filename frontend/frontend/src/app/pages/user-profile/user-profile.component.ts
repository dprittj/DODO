import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: any;
  isLoggedIn = false;
  roles: string[] = [];

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

}
