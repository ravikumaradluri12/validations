package com.cts.flightbooking.ticketservice.controllers;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.flightbooking.ticketservice.model.Ticket;
import com.cts.flightbooking.ticketservice.service.TicketServiceInterface;
import com.cts.flightbooking.ticketservice.dto.TicketDto;
import com.cts.flightbooking.ticketservice.exception.TicketErrorResponse;
import com.cts.flightbooking.ticketservice.exception.TicketNotFoundException;

@CrossOrigin
@RestController
@RequestMapping("/bookflightapp")
public class TicketController {

	@Autowired
	private TicketServiceInterface ticketService;
	
	@GetMapping("/tickets")
	public ResponseEntity<TicketDto> getAllTickets(){
		List<Ticket> ticketDetails = this.ticketService.getAllTickets();
		TicketDto ticketDto = new TicketDto();
		ticketDto.setTicketList(ticketDetails);
		ResponseEntity<TicketDto> responseEntity = new ResponseEntity<TicketDto>(ticketDto, HttpStatus.OK);
		return responseEntity;		
	}
	@PostMapping("/tickets")
	public ResponseEntity<TicketDto> addTicket(@RequestBody Ticket ticket){
		Ticket ticketDetails = this.ticketService.addTicket(ticket);
		List<Ticket> ticketList = new ArrayList<>();
		ticketList.add(ticketDetails);
		TicketDto ticketDto = new TicketDto();
		ticketDto.setTicketList(ticketList);
		ResponseEntity<TicketDto> responseEntity = new ResponseEntity<TicketDto>(ticketDto, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("/tickets/{id}")
	public ResponseEntity<TicketDto> getFlightById(@PathVariable Integer id){
		
		Ticket ticket=this.ticketService.getTicketById(id);
		List<Ticket> ticketList = new ArrayList<>();
		ticketList.add(ticket);
		TicketDto ticketDto = new TicketDto();
		ticketDto.setTicketList(ticketList);
		ResponseEntity<TicketDto> responseEntity = new ResponseEntity<TicketDto>(ticketDto, HttpStatus.OK);
		return responseEntity;
	}
	
	@ExceptionHandler(TicketNotFoundException.class)
	public ResponseEntity<TicketErrorResponse> ticketNotFoundExceptionHandler(TicketNotFoundException ex){
		
		TicketErrorResponse error = new TicketErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value(), System.currentTimeMillis());
		ResponseEntity<TicketErrorResponse> response = new ResponseEntity<TicketErrorResponse>(error, HttpStatus.NOT_FOUND);						
		return response;
	}
}
