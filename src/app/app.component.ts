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
import { AuthorComponent } from './components/author/author/author.component';
import { AuthorService } from './service/author.service';
import { CategoryDetailService } from './service/category-detail.service';
import { RegisterComponent } from './components/register/register/register.component';
import { RegisterService } from './service/register.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NaviComponent,
    BookComponent,
    HttpClientModule,
    CategoryComponent,
    AuthorComponent,
    RegisterComponent,
    ToastrModule
  ],
  providers:[
    BookService,
    BookDetailsService,
    CategoryService,
    AuthorService,
    CategoryDetailService,
    RegisterService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLogin = false;
  title = 'bookstoremanagement';
}
