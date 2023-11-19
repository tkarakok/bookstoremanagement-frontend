import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listResponseModel } from '../model/listResponseModel';
import { BookDetails } from '../model/bookDetails';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient:HttpClient) { }

  getBookDetails(){
    let newPath = this.apiUrl + "books/getallbookdetails";
    return this.httpClient.get<listResponseModel<BookDetails>>(newPath);
  }
}
