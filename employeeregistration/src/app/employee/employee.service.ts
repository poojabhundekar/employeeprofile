import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  localUrl = 'http://localhost:8080/api';

  getAllEmployees() {
        return this.http.get<Employee[]>(this.localUrl + '/employees');
    }

    getById(id: string) {
        return this.http.get(this.localUrl + '/employees/get-emp/' + id);
    }

}
