import { Routes } from '@angular/router';
import { BookComponent } from './components/books/book/book.component';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/login/login/login.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", component:LoginComponent},
    {path:"login", component:LoginComponent},
    {path:"books", component:BookComponent},
    {path:"register", component:RegisterComponent},
];
