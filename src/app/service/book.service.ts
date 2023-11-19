import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { listResponseModel } from '../model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient:HttpClient) { }

  getBooks(){
    let newPath = this.apiUrl + "books/getall";
    return this.httpClient.get<listResponseModel<Book>>(newPath);
  }
}
