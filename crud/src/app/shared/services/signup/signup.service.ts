import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { NewUser } from './newUser';

const API = environment.ApiUrl

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public addUser(newUser: NewUser) {
    return this.httpClient.post<NewUser>(`${API}/signup`, newUser)
      .pipe(map((res: any) => { return res; }));
  }

  public getUser() {
    return this.httpClient.get<any>(`${API}/signup`)
  }

}
