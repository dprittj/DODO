import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 form: any ={
    email: null,
    username: null,
    password: null,
    verifyPassword: null
  };

  constructor(private _route: Router, private _service: UserService) { }

  ngOnInit(): void {
  }

  //signUp() takes the form fields of email, username, password, and verifyPassword and ties them to the 
  // ngForm element, then reroutes to /buildnest

  signUp(): void  {
    const {email, username, password, verifyPassword} = this.form;
    if (password == verifyPassword) {
      console.log(this.form);
      this._service.createNewUser(username, password).subscribe(
        data=>{
          console.log("New User Created");
        }
      )
      this._route.navigateByUrl('/buildnest'); 
    }

  }
}
