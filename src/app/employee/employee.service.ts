import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  localUrl = 'http://192.168.1.29:8090/empapiserver';

  getAllEmployees() {
    return this.http.get<Employee[]>(this.localUrl + '/user/get-users');
  }



  deleteEmployee(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(this.localUrl + '/user/delete-user/' + id, httpOptions);
  }
}
