import { Component } from '@angular/core';
import { TravelService } from './travel.service';
import { Travel } from './model/Travel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  travel : Travel;
  result : string;
  travelArr : Travel[];
  flag :boolean;

  constructor(private service: TravelService) {
    this.travel = new Travel();
    this.result = "";  
    this.travelArr =[];
    this.flag=false;
  }
  insertTravel(data:any){
    this.travel.id = data.id;
    this.travel.travelName = data.travelName;
    this.travel.travelContact=data.travelContact;
    this.travel.travelPlace = data.travelPlace;
    this.travel.travelType = data.travelType;
    this.travel.travelStart = data.travelStart;
    this.travel.travelEnd = data.travelEnd;
    this.travel.travelRoom = data.travelRoom;
    // alert(data.travelName+""+data.travelContact+""+data.travelPlace+""+data.travelType+""+
    //   data.travelStart+""+data.travelEnd+""+data.travelRoom);
    this.result = this.service.insertTravel(this.travel);
  }

  updateTravel(data:any){
    this.travel.id = data.id;
    this.travel.travelName = data.travelName;
    this.travel.travelContact=data.travelContact;
    this.travel.travelPlace = data.travelPlace;
    this.travel.travelType = data.travelType;
    this.travel.travelStart = data.travelStart;
    this.travel.travelEnd = data.travelEnd;
    this.travel.travelRoom = data.travelRoom;
    // alert(data.travelName+""+data.travelContact+""+data.travelPlace+""+data.travelType+""+
    //   data.travelStart+""+data.travelEnd+""+data.travelRoom);
    this.result = this.service.updateTravel(this.travel);
  }

  deleteTravel(data : any){
    this.result = this.service.deleteTravel(data.id);
  }
  findTravel(data : any){
    this.travel = this.service.findTravel(data.id);
    this.result = this.travel.id+" "+this.travel.travelName+" "+this.travel.travelContact+" "+this.travel.travelPlace+" "+
    this.travel.travelType+" "+this.travel.travelStart+" "+this.travel.travelEnd+" "+this.travel.travelRoom;
  }

  findAllTravel(){
    this.travelArr = this.service.findAllTravel();
    this.flag=true;
  }
  
}
