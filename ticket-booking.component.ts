import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ticket } from 'src/app/model/Ticket.model';
import { SearchFlightService } from '../services/search-flight.service';

import { TicketDetailsService } from '../services/ticket-details.service';


@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  
  constructor(public searchAvailableFlights : SearchFlightService, public router : Router) { }

  ngOnInit(): void {
  }

}
