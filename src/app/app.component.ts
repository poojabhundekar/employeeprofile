import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  successMessage: string;
  errorMessage: string;
  warningMessage: string;

  isSuccess: boolean = false;
  isError: boolean = false;
  isWarning: boolean = false;
  constructor(private router: Router){

  }
  ngOnInit() {
    this.router.navigate(['employees']);
  }

  public setSuccessMessage(message: string) {
    this.successMessage = message;
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 6000);
  }

  public setErrorMessage(message: string) {
    this.errorMessage = message;
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 6000);
  }

  public setWarningMessage(message: string) {
    this.warningMessage = message;
    this.isWarning = true;
    setTimeout(() => {
      this.isWarning = false;
    }, 6000);
  }
}
