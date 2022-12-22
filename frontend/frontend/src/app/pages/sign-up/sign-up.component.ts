import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  signUp(): void  {
    const {email, username, password, verifyPassword} = this.form;
    if (password == verifyPassword) {
      console.log(this.form);
    this._route.navigateByUrl('/home'); // switch to '/buildnest once I can pull Zach's commit
    }
  }
}
