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

 API = 'http://localhost:8080/api';
 API_2 = 'http://localhost:8080/api/signup'; 

//  user: User = new User;

  constructor(private _http: HttpClient) { }

  createNewUser(username: String, password: String): Observable<any>{
    return this._http.post(this.API_2, {
      username,
      password
    }, httpOptions);
  }

  getUserByUsername(username: String, password: String): Observable<any>{
    return this._http.post(this.API + "/login", {
      username,
      password
    }, httpOptions)
  }
  
}
