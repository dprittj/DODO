import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 form: any ={
    email: null,
    username: null,
    location: null,
    password: null,
    verifyPassword: null
  };

  isSuccessful = false;
  isLoggedIn = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private _route: Router, private _service: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  //signUp() takes the form fields of email, username, password, and verifyPassword and ties them to the 
  // ngForm element, then reroutes to /buildnest

  signUp(): void  {
    const {email, username, location, password, verifyPassword} = this.form;
    if (password == verifyPassword) {
      // console.log(this.form);
      this._service.createNewUser(email, username, location, password).subscribe(
        data=>{
          console.log("New User Created");
          console.log(data);
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this._route.navigateByUrl('/buildnest');
             }
          );
        }
      
    }
  }
