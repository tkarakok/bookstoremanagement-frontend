import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../../service/app.service';
import { Book } from '../../../../model/book';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent{

  selectedBook: Book;

  constructor(private appService : AppService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  setSelectedBook() {
    this.selectedBook = this.appService.selectedBook;
  }
}
