import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AddEmployeeService } from './add-employee.service';
import { formatDate } from '@angular/common';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  departmentList: any = ['IT', 'Machine Learning', 'Artificial Intelligence'];
  constructor(private router: Router, private formBuilder: FormBuilder, private addEmployeeService: AddEmployeeService) { }
  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      dob: ['', Validators.required]
    });
    this.employeeForm.controls['gender'].setValue('MALE');
    this.employeeForm.controls['department'].setValue(this.departmentList[0]);
  }
  gobackToViewScreen() {
    this.router.navigate(['employees']);

  }
  onSubmit() {
    console.log('hii');
    const format = 'yyyy-MM-dd HH:mm';
    const locale = 'en-US';
    const formattedDate = formatDate(this.employeeForm.get('dob').value, format, locale);
    this.employeeForm.controls['dob'].setValue(formattedDate);

    // stop here if form is invalid
    if (this.employeeForm.invalid) {
      return;
    }

    this.employeeForm.controls['firstName'].setValue(this.employeeForm.get('firstName').
    value.charAt(0).toUpperCase() + this.employeeForm.get('firstName').value.slice(1));
    this.employeeForm.controls['lastName'].setValue(this.employeeForm.get('lastName').
    value.charAt(0).toUpperCase() + this.employeeForm.get('lastName').value.slice(1));
    console.log(this.employeeForm.value);
    this.addEmployeeService.addEmployee(this.employeeForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['employees']);
        },
        error => {
        });
  }

}
