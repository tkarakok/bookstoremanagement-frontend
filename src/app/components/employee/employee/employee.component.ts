import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../model/employee';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employees : Employee[] = [];

  constructor(private employeeService : EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response.data;
    })
  }
}
