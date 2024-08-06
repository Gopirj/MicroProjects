import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Travel } from './model/Travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  url : string;
  travel : Travel;
  travelArr : Travel[];
 
  constructor(private http : HttpClient) {
    this.url="http://localhost:3004/travel";
    this.travel = new Travel();
    this.travelArr =[];
   }

  // insert Button Method 
   insertTravel(travel:Travel){
    // <Employee> is object of incialization of the variable name,subscribe mean by commit for only to run that method
    this.http.post<Travel>(this.url,travel).subscribe();
    return "Customer Details Added";
  }

  updateTravel(travel:Travel){
    // <Employee> is object of incialization of the variable name,subscribe mean by commit for only to run that method
    this.http.put<Travel>(this.url+"/"+travel.id,travel).subscribe();
    return "Customer Details Update";
  }

  
  deleteTravel(id : number){
    this.http.delete<Travel>(this.url+"/"+id).subscribe();
    return "Customer Details Deleted";
  }

  findTravel(id :number){
    this.http.get<Travel>(this.url+"/"+id).subscribe(data =>this.travel=data);
    return this.travel;
  }

  findAllTravel(){
    this.http.get<Travel[]>(this.url).subscribe(data =>this.travelArr = data);
    return this.travelArr
  }
}
