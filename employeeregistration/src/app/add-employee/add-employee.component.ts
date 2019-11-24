import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  departmentList:any = ["Software","Harddware"];
  constructor(private router : Router ) { }
  ngOnInit() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      gender: new FormControl()
      // department:[""]
    });
  }
  gobackToViewScreen(){
        this.router.navigate(['employees']);

  }
  onSubmit(){
    console.log('hii');
    console.log(this.employeeForm.value);
  }

}
