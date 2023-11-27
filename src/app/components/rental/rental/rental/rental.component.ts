import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../../service/app.service';
import { Book } from '../../../../model/book';
import { BookDetails } from '../../../../model/bookDetails';
import { Customer } from '../../../../model/customer';
import { CustomerService } from '../../../../service/customer.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RentalService } from '../../../../service/rental.service';
import { RentModel } from '../../../../model/rentModel';
import { ToastrService } from 'ngx-toastr';
import { CustomerAddComponent } from '../../../customer-add/customer-add/customer-add.component';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomerAddComponent],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css',
  providers:[ToastrService]
})
export class RentalComponent implements OnInit {

  selectedBook: BookDetails;
  customers : Customer[] = [];
  selectedCustomerEmail : string;
  selectedCustomer : Customer
  rentalModel : RentModel

  constructor(
    private appService : AppService, 
    private customerService : CustomerService,
    private router : Router,
    private rentalService : RentalService,
    private toastrService : ToastrService
    ){}

  ngOnInit(): void {
    this.setSelectedBook();
    this.setCustomers();
  }

  setSelectedBook() {
    this.selectedBook = this.appService.selectedBook;
  }

  setCustomers(){
    this.customerService.getCustomers().subscribe(res => {
      this.customers = res.data;
    });
  }

  rental(){
    console.log(this.selectedCustomerEmail);
    if(this.selectedCustomerEmail)
    {
      this.rentalModel = new RentModel(this.selectedCustomerEmail, this.selectedBook.bookName)
      this.rentalService.rent(this.rentalModel).subscribe(
        (response) => {
          this.toastrService.success(
            response.message
          );
        },
        (error) => {
          this.toastrService.error(error);
        });
    }
    else {
      this.toastrService.error('Try Again. Please fill all the fields');
    }
     
  }

  registerNewCustomer(){
    this.router.navigate(["/customer-add"])
  }
}
