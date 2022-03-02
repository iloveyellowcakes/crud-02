import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';


const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService

  ) { }

  public authenticate(email: string, password: string) {
    return this.httpClient
      .post(
        `${API}/login`,
        { email, password },
        { observe: 'response' }
      )
      .pipe(map((res: HttpResponse<any>) => {

        const authToken = res.body.accessToken;

        this.tokenService.setToken(authToken)

      }));
  }

}
