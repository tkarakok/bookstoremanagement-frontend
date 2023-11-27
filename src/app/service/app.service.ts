import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BookDetails } from '../model/bookDetails';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isLoginSuccess = false;
  selectedBook : BookDetails;

  constructor() { }

  loginSuccess() {
    this.isLoginSuccess = true;
  }

  setSelectedBook(book : BookDetails) {
    this.selectedBook = book;
  }
}
