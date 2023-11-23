import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listResponseModel } from '../model/listResponseModel';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44308/api/";

  constructor(private httpClient : HttpClient) { }

  getCustomers(){
    let newPath = this.apiUrl + "customers/getall";
    return this.httpClient.get<listResponseModel<Customer>>(newPath);
  }
}
