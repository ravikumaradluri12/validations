package com.cts.flightbooking.ticketservice.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.ticketservice.model.Ticket;

@Component
public interface TicketRepositoryInterface extends JpaRepository<Ticket, Integer>{

}

