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
import { LoginComponent } from './components/login/login/login.component';
import { AppService } from './service/app.service';
import { AuthService } from './service/auth.service';
import { EmployeeService } from './service/employee.service';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { CustomerService } from './service/customer.service';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerAddComponent } from './components/customer-add/customer-add/customer-add.component';
import { CustomerAddService } from './service/customer-add.service';
import {MatIconModule} from '@angular/material/icon';
import { RentalService } from './service/rental.service';
import { RentalComponent } from './components/rental/rental/rental/rental.component';

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
    ToastrModule,
    LoginComponent,
    EmployeeComponent,
    CustomerComponent,
    CustomerAddComponent,
    MatIconModule,
    RentalComponent
  ],
  providers:[
    BookService,
    BookDetailsService,
    CategoryService,
    AuthorService,
    CategoryDetailService,
    RegisterService,
    AppService,
    AuthService,
    EmployeeService,
    CustomerService,
    CustomerAddService,
    RentalService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appService : AppService;
  authservice : AuthService;
  title = 'bookstoremanagement';

  constructor(private appSer : AppService , authSer : AuthService){
    this.appService = appSer;
    this.authservice = authSer;
  }
}
