import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService } from '../../../service/author.service';
import { Author } from '../../../model/author';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit {

  authors : Author[] = [];

  constructor(private authorService : AuthorService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(){
    this.authorService.getAuthors().subscribe(res => {
      this.authors = res.data;
    });
  }

}
