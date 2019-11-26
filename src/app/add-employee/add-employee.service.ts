import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../entity/employee';

@Injectable({
    providedIn: 'root'
})
export class AddEmployeeService {

    constructor(private http: HttpClient) { }

    localUrl = 'http://192.168.1.29:8090/empapiserver';

    addEmployee(employee: Employee) {
        return this.http.post(this.localUrl + '/user/save-users', employee);
    }

}
