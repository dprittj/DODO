import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: any ={
    username: null,
    password: null
  };

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  signIn(): void  {
    //authenticate username and hashkey 
    const { username, password } = this.form;
    console.log(this.form);

    this._route.navigateByUrl('/home');
  }
}
