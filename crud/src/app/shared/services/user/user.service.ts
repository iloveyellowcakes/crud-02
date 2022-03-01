import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from './user';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataSource = new Subject<any>();
  _dados = this.dataSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  public addUser(newUser: User) {
    return this.httpClient.post<User>(`${API}/students`, newUser)
      .pipe(map((res: any) => { return res; }));
  }

  public getUser() {
    return this.httpClient.get<User>(`${API}/students`)
      .pipe(map((res: any) => { return res; }));
  }

  public removeUser(userId: number) {
    return this.httpClient.delete(`${API}/students/${userId}`);
  }

  public updateUser(userId: number, data: User) {

    return this.httpClient.put<User>(`${API}/students/${userId}`, data)
      .pipe(map((res: any) => { return res; }));

  }

  public refreshUser() {
    this.getUser()
      .subscribe(data => {
        this.dataSource.next(data);
      });
  }

}
