import { Routes } from '@angular/router';
import { BookComponent } from './components/books/book/book.component';
import { RegisterComponent } from './components/register/register/register.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", component:RegisterComponent},
    {path:"books", component:BookComponent},
    {path:"register", component:RegisterComponent},
];
