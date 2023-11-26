import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../books/book/book.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CommonModule,MatIconModule, BookComponent, RouterOutlet],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {
  authservice : AuthService;

  constructor(private authSer : AuthService){ this.authservice = authSer}
}
