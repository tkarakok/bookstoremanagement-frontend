import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterService } from '../../../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[
    RegisterService
  ]
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private registerService : RegisterService,
    private router : Router
    ){}
  
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  register(){
    if (this.registerForm.valid) {
     
      let registerModel = Object.assign({} , this.registerForm.value);
      this.registerService.register(registerModel).subscribe(response => {
        console.log(response);
          this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })
    }
  }
}
