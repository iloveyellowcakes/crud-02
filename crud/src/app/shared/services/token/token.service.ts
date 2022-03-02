import { Injectable } from '@angular/core';

const KEY ='token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public hasToken() {
    return !!this.getToken();
  }

  public setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  public getToken() {
    return window.localStorage.getItem(KEY) ?? '';
  }

  public removeToken() {
    window.localStorage.removeItem(KEY);
  }

}
