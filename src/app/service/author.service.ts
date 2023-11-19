import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listResponseModel } from '../model/listResponseModel';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient : HttpClient) { }

  getAuthors(){
    let newApiUrl = this.apiUrl + "authors/getall";
    return this.httpClient.get<listResponseModel<Author>>(newApiUrl);
  }
}
