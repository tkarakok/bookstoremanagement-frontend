import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../model/registerModel';
import { ResponseModel } from '../model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient:HttpClient) { }

  register(registerModel:RegisterModel){
    let newPath = this.apiUrl + "auth/register";
    return this.httpClient.post<ResponseModel>(newPath, registerModel);
  }
}
