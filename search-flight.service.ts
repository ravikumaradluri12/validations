import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookFlight } from 'src/app/model/BookFlight.model';
import { Flight } from 'src/app/model/Flight.model';
import { ScheduleFlight } from 'src/app/model/ScheduleFlight.model';
import { User } from 'src/app/model/User.model';
import { FlightAppHttpService } from './flight-app-http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {

  public searchFlightDetails : Array<BookFlight>;
  public currentUser : Array<User>;
  constructor(private flightDetails : FlightAppHttpService) {
    this.searchFlightDetails = [];
    this.currentUser = [];
   }

   getFlightDetails():Observable<ScheduleFlight[]>{
    return this.flightDetails.getScheduleFlightDetails();
  }
   getAvailableFlights(availableFlight : BookFlight){
     this.searchFlightDetails.push(availableFlight);
   }
   getCurrentUser(cuser : User){
    this.currentUser.push(cuser);
  }
}
