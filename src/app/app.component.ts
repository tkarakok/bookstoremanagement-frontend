import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi/navi.component';
import { BookComponent } from './components/books/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './service/book.service';
import { BookDetailsService } from './service/book-details.service';
import { CategoryComponent } from './components/category/category/category.component';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NaviComponent,
    BookComponent,
    HttpClientModule,
    CategoryComponent
  ],
  providers:[
    BookService,
    BookDetailsService,
    CategoryService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstoremanagement';
}
