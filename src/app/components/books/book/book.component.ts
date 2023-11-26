import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../model/book';
import { BookService } from '../../../service/book.service';
import { BookDetails } from '../../../model/bookDetails';
import { BookDetailsService } from '../../../service/book-details.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  bookDetails: BookDetails[] = [];
  selectedBook : BookDetails;

  constructor(
    private bookService: BookService,
    private bookDetailsService: BookDetailsService,
    private router : Router
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

  setSelectedBook(sendBook :BookDetails){
    this.selectedBook = sendBook;
    // this.router.navigate(["/rental"])
  }

}
