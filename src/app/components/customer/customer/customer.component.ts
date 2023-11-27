import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../service/customer.service';
import { Router } from '@angular/router';
import { AppService } from '../../../service/app.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  customers : Customer[] = [];
  
  constructor(
    private customerService : CustomerService, 
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getCustomer();
  }


  getCustomer(){
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
    });
  }

  newCustomer(){
    this.router.navigate(["/customer-add"]);
  }

  
  

}
