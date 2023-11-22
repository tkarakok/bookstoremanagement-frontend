import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listResponseModel } from '../model/listResponseModel';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient : HttpClient) { }

  getEmployees(){
    let newApiUrl = this.apiUrl + "employees/getemployeedetails";
    return this.httpClient.get<listResponseModel<Employee>>(newApiUrl);
  }
}
