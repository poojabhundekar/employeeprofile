import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../entity/employee';

@Injectable({
    providedIn: 'root'
})
export class AddEmployeeService {

    constructor(private http: HttpClient) { }

    localUrl = 'http://localhost:9090/empapiserver';

    addEmployee(employee: Employee) {
        return this.http.post(this.localUrl + '/employees', employee);
    }

}
