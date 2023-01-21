import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  login(): void {
  this._route.navigateByUrl('/login');
  }

  signup(): void {
    this._route.navigateByUrl('/signup');
    }

}
