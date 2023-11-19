import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../model/book';
import { BookService } from '../../../service/book.service';
import { BookDetails } from '../../../model/bookDetails';
import { BookDetailsService } from '../../../service/book-details.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  bookDetails: BookDetails[] = [];
  constructor(
    private bookService: BookService,
    private bookDetailsService: BookDetailsService
    ) { }

  ngOnInit(): void {
    this.getBooks();
    this.getBookDetails();
  }
  

  getBooks() {
    this.bookService.getBooks().subscribe(res => {
      this.books = res.data;
    });
  }

  getBookDetails() {
    this.bookDetailsService.getBookDetails().subscribe(res => {
      this.bookDetails = res.data;
    });
  }


}
