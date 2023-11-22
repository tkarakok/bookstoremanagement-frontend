import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../books/book/book.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CommonModule, BookComponent, RouterOutlet],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {
  authservice : AuthService;

  constructor(private authSer : AuthService){ this.authservice = authSer}
}
