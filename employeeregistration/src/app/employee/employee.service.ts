import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  localUrl = 'http://localhost:9090/api';

  getAllEmployees() {
        return this.http.get<Employee[]>(this.localUrl + '/employees');
    }

    getById(id: string) {
        return this.http.get(this.localUrl + '/employees/get-emp/' + id);
    }

    deleteEmployee(id: number) {
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      };
      return this.http.delete(this.localUrl + '/employees/delete-emp/' + id,  httpOptions);
  }
}
