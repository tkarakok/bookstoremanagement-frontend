import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDetails } from '../model/categoryDetails';
import { listResponseModel } from '../model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailService {

  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient : HttpClient) { }

  getCategoryDetails(){
    let newPath = this.apiUrl + "categories/getcategorydetails";
    return this.httpClient.get<listResponseModel<CategoryDetails>>(newPath);
  }
}
