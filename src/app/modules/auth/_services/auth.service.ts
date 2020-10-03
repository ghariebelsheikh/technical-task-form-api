import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: { email: string; password: string }) {
    return this.http.post(`${environment.baseURL}/auth/login`, model);

    // We can use the pipe opertaor to apply map operator
    // and store the token in local storage
    // to check if the user is loggedIn or not

  }

  register(model: User) {
    return this.http.post(`${environment.baseURL}/auth/register`, model);
  }

  loggedIn() {
    //  Get the token from the local strorage
    //  and check if it expired or not
  }

  logout() {
    //  Remove the token from local storage
  }
}
