import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../model/loginModel';
import { ResponseModel } from '../model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    let newPath = this.apiUrl + "auth/login";
    return this.httpClient.post<ResponseModel>(newPath, loginModel);
  }
}
