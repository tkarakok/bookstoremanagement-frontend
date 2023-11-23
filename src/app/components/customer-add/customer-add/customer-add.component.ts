import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerAddService } from '../../../service/customer-add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css',
  providers: [ToastrService, CustomerAddService],
})
export class CustomerAddComponent implements OnInit{
  customerAddForm : FormGroup;

  constructor(
    private fb: FormBuilder, 
    private toastrService : ToastrService,
    private customerAddService : CustomerAddService,
    private router : Router
    ) {}

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

  createCustomerAddForm(){
    this.customerAddForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }
  backToCustomers(){
    this.router.navigate(["/customers"]);
  }
  customerAdd(){
    if(this.customerAddForm.valid){
      let customerAddModel = Object.assign({}, this.customerAddForm.value);
      this.customerAddService.customerAdd(customerAddModel).subscribe(
        (response) => {
          this.toastrService.success(
            response.message
          );
        },
        (error) => {
          this.toastrService.error(error);
        }
      );
    }
    else{
      this.toastrService.error('Try Again. Please fill all the fields');
    }
  }
}
