import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { map } from 'rxjs';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  addUser(newUser: User) {
    return this.httpClient.post(`${API}/students`, newUser)
      .pipe(map((res: any) => { return res; }));
  }

  getUser() {
    return this.httpClient.get(`${API}/students`)
      .pipe(map((res: any) => { return res; }));
  }

  removeUser(userId: number) {
    return this.httpClient.delete(`${API}/students/${userId}`);
  }


}
