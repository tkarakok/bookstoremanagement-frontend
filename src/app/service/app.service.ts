import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isLoginSuccess = false;

  constructor() { }

  loginSuccess() {
    this.isLoginSuccess = true;
  }
}
