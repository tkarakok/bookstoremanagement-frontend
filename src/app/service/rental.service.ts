import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentModel } from '../model/rentModel';
import { ResponseModel } from '../model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient:HttpClient) { }

  rent(rentModel : RentModel){
    let newApi = this.apiUrl + "rentals/newrental";
    return this.httpClient.post<ResponseModel>(newApi, rentModel);
  }

}
