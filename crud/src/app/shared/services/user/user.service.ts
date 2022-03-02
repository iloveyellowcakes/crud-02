import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Student } from './student';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataSource = new Subject<any>();
  _dados = this.dataSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  public addUser(newUser: Student) {
    return this.httpClient.post<Student>(`${API}/students`, newUser)
      .pipe(map((res: any) => { return res; }));
  }

  public getUser() {
    return this.httpClient.get<Student>(`${API}/students`)
      .pipe(map((res: any) => { return res; }));
  }

  public removeUser(userId: number) {
    return this.httpClient.delete(`${API}/students/${userId}`);
  }

  public updateUser(userId: number, data: Student) {

    return this.httpClient.put<Student>(`${API}/students/${userId}`, data)
      .pipe(map((res: any) => { return res; }));

  }

  public refreshUser() {
    this.getUser()
      .subscribe(data => {
        this.dataSource.next(data);
      });
  }

}
