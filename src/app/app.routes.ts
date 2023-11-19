import { Routes } from '@angular/router';
import { BookComponent } from './components/books/book/book.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", component:BookComponent},
    {path:"books", component:BookComponent},
];
