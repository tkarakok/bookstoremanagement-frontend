import { Routes } from '@angular/router';
import { BookComponent } from './components/books/book/book.component';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import { CategoryComponent } from './components/category/category/category.component';
import { AuthorComponent } from './components/author/author/author.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", component:LoginComponent},
    {path:"login", component:LoginComponent},
    {path:"books", component:BookComponent},
    {path:"register", component:RegisterComponent},
    {path:"categories", component:CategoryComponent},
    {path:"authors", component:AuthorComponent},
    {path:"employees", component:EmployeeComponent},
];
