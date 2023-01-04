import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  //API links below determine which page the restAPI is pulling information from
 API = 'http://localhost:8080/api';
 API_2 = 'http://localhost:8080/api/signup'; 

//  user: User = new User;

  constructor(private _http: HttpClient) { }

  //createNewUser takes in a username and password and hands it to the backend 
  // to store in the database
  createNewUser(username: String, password: String): Observable<any>{
    return this._http.post(this.API_2, {
      username,
      password
    }, httpOptions);
  }

  //getUserByUsername will take the username, findById in the database,
  //  and if it exists, will compare the hashkeys and create a token for session data
  getUserByUsername(username: String, password: String): Observable<any>{
    return this._http.post(this.API + "/login", {
      username,
      password
    }, httpOptions)
  }
  
}
