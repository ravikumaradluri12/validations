import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/model/Ticket.model';
import { UserBooking } from 'src/app/model/UserBooking.model';
import { FlightAppHttpService } from './flight-app-http.service';


@Injectable({
  providedIn: 'root'
})
export class TicketDetailsService {

  public ticketDetails : Array<Ticket>;
  constructor(private httpService : FlightAppHttpService) { 
    this.ticketDetails  = [];
  }

  addTicket(ticket : Ticket):Observable<Ticket>{
    return this.httpService.addTickets(ticket);
  }
  getTicketList():Observable<Ticket[]>{
    return this.httpService.getTicketDetails();
  }
  showTicket(tickets : Ticket){
    this.ticketDetails.push(tickets);
  }
  addUserBooking(userBookingDetails : UserBooking):Observable<UserBooking>{
    return this.httpService.addBookingHistory(userBookingDetails);
  }
  getUserBooking():Observable<UserBooking[]>{
    return this.httpService.getBookingHistory();
  }
  getUserBookingById(id : number):Observable<UserBooking>{
    return this.httpService.getBookingHistoryById(id);
  }
}
