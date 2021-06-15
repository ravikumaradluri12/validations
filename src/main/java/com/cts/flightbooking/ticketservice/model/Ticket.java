package com.cts.flightbooking.ticketservice.model;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ticket {

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private Integer ticketNumber;
	
	@Column
	private String passengerName; 
	
	@Column
	private String flightName; 
	
	@Column
	private String flightNumber; 
	
	@Column
	private String source; 
	
	@Column
	private String destination;
	
	@Column
	private Date departureDate;
	
	@Column
	private Date departureTime;
	
	@Column
	private Date arrivalTime;
	
	@Column
	private Date  journeyHrs; 
	
	@Column
	private Integer noOfPassengers; 

	@Column
	private Integer ticketRate ;

	
	
	public Ticket() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ticket(Integer id, Integer ticketNumber, String passengerName, String flightName, String flightNumber,
			String source, String destination, Date departureDate, Date departureTime, Date arrivalTime,
			Date journeyHrs, Integer noOfPassengers, Integer ticketRate) {
		super();
		this.id = id;
		this.ticketNumber = ticketNumber;
		this.passengerName = passengerName;
		this.flightName = flightName;
		this.flightNumber = flightNumber;
		this.source = source;
		this.destination = destination;
		this.departureDate = departureDate;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.journeyHrs = journeyHrs;
		this.noOfPassengers = noOfPassengers;
		this.ticketRate = ticketRate;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getTicketNumber() {
		return ticketNumber;
	}

	public void setTicketNumber(Integer ticketNumber) {
		this.ticketNumber = ticketNumber;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public Date getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(Date departureDate) {
		this.departureDate = departureDate;
	}

	public Date getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(Date departureTime) {
		this.departureTime = departureTime;
	}

	public Date getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(Date arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public Date getJourneyHrs() {
		return journeyHrs;
	}

	public void setJourneyHrs(Date journeyHrs) {
		this.journeyHrs = journeyHrs;
	}

	public Integer getNoOfPassengers() {
		return noOfPassengers;
	}

	public void setNoOfPassengers(Integer noOfPassengers) {
		this.noOfPassengers = noOfPassengers;
	}

	public Integer getTicketRate() {
		return ticketRate;
	}

	public void setTicketRate(Integer ticketRate) {
		this.ticketRate = ticketRate;
	}

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", ticketNumber=" + ticketNumber + ", passengerName=" + passengerName
				+ ", flightName=" + flightName + ", flightNumber=" + flightNumber + ", source=" + source
				+ ", destination=" + destination + ", departureDate=" + departureDate + ", departureTime="
				+ departureTime + ", arrivalTime=" + arrivalTime + ", journeyHrs=" + journeyHrs + ", noOfPassengers="
				+ noOfPassengers + ", ticketRate=" + ticketRate + "]";
	}
	
	
}


