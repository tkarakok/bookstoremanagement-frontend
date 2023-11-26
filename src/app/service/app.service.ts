import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isLoginSuccess = false;
  selectedBook : Book;
  constructor() { }

  loginSuccess() {
    this.isLoginSuccess = true;
  }

  setSelectedBook(book : Book) {
    this.selectedBook = book;
  }
}
