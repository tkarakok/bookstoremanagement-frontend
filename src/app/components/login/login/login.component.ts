import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { LoginService } from '../../../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../../service/app.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService, ToastrService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastrService: ToastrService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.loginService.login(loginModel).subscribe(
        (response) => {
          this.router.navigate(["/books"]);
          this.appService.loginSuccess();
          this.toastrService.success(response.message);
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    }else{
      this.toastrService.error('Try Again. Please fill all the fields');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
