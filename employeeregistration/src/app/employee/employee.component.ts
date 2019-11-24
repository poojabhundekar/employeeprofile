import { Component, OnInit } from '@angular/core';
import { Employee } from './entity/employee';
import { AppComponent } from './../app.component' ;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private appComponent : AppComponent) { }

 employeeList : Employee[] = [];
  ngOnInit() {
    console.log('calling');
this.getEmployees();
  }

  getEmployees(){
    this.employeeList =list;
    console.log(this.employeeList);
  }
}

export const list : Employee[]=[{
  firstName: 'Pooja',
  lastName: 'H',
  gender: 'FEMALE',
  department:'Software'
}];