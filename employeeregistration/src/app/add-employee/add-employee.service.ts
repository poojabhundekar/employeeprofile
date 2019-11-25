import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private http: HttpClient) { }

   localUrl = 'http://localhost:8080/api';

   

    register(employee: Employee) {
        return this.http.post(this.localUrl + '/employees', employee);
    }

    update(employee: Employee) {
        return this.http.patch(this.localUrl + '/employees', employee);
    }

    delete(id: number) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete(this.localUrl + '/employees/delete-emp/' + id,  httpOptions);
    }

}
