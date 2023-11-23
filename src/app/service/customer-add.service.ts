import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customerAddModel } from '../model/customerAddModel';
import { ResponseModel } from '../model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddService {
  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient:HttpClient) { }

  customerAdd(customerAddModel:customerAddModel){
    let newPath = this.apiUrl + "customers/addcustomer";
    return this.httpClient.post<ResponseModel>(newPath, customerAddModel);
  }
}
