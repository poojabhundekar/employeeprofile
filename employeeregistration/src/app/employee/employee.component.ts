import { Component, OnInit } from '@angular/core';
import { Employee } from '../entity/employee';
import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private appComponent: AppComponent, private router: Router, private employeeService: EmployeeService) { }

  employeeList: Employee[] = [];
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe(users => {
      this.employeeList = users;
    });
  }

  addEmployee() {
    this.router.navigate(['add-employee']);
  }

  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
    }, () => this.getEmployees());
  }
}
