import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string;
  employee:Employee;
  employeeArr :Employee[];
  

  constructor(private http : HttpClient) { 
    this.url="http://localhost:3004/employee";
    this.employee=new Employee();
    this.employeeArr=[];
  }
  insertEmployee(employee:Employee){
    // <Employee> is object of incialization of the variable name,subscribe mean by commit for only to run that method
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Employee Details Added";
  }

  updateEmployee(employee:Employee){
    // <Employee> is object of incialization of the variable name,subscribe mean by commit for only to run that method
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return "Employee Details Update";
  }             
  deleteEmployee(empId : number){
    this.http.delete<Employee>(this.url+"/"+empId).subscribe();
    return "Employee Details Delete";
  }
  findEmployee(empId : number){
    this.http.get<Employee>(this.url+"/"+empId).subscribe(data =>this.employee =data);
    return this.employee;
  }
  findAllEmployee(){
    this.http.get<Employee[]>(this.url).subscribe(data => this.employeeArr=data);
    return this.employeeArr;
  }
}
