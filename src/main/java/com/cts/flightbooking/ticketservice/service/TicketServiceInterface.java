package com.cts.flightbooking.ticketservice.service;



import java.util.List;

import com.cts.flightbooking.ticketservice.model.Ticket;



public interface TicketServiceInterface {
	
	Ticket addTicket(Ticket ticket);
	
	List<Ticket> getAllTickets();
	
	Ticket getTicketById(Integer id);
}
