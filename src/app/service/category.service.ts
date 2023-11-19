import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { listResponseModel } from '../model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient:HttpClient) { }

  getCategories(){
    let newPath = this.apiUrl + "categories/getall";
    return this.httpClient.get<listResponseModel<Category>>(newPath);
  }
}