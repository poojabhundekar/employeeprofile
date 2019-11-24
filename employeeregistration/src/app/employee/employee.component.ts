import { Component, OnInit } from '@angular/core';
import { Employee } from './entity/employee';
import { AppComponent } from './../app.component' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private appComponent : AppComponent, private router : Router, ) { }

 employeeList : Employee[] = [];
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeList =list;
  }

  addEmployee(){
    console.log('ADD EMPLOYEE');
    this.router.navigate(['add-employee']);
  }
  editEmployee(id){
    console.log('edit id = '+ id);
  }
  deleteEmployee(id){
    console.log('deletre id = '+ id);
  }
}

export const list : Employee[]=[{
  id: 'Emp1',
  firstName: 'Sumedh',
  lastName: 'K',
  gender: 'MALE',
  department:'Software'
},{
  id: 'Emp2',
  firstName: 'Pooja',
  lastName: 'H',
  gender: 'FEMALE',
  department:'Software'
}];