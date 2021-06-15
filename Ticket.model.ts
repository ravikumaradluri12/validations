export class Ticket{
    id : number=0;
    ticketNumber : number;
    passengerName : string;
    flightName : string;
    flightNumber : string;
    source : string;
    destination : string;
    departureDate : Date;
    departureTime : Date;
    arrivalTime : Date;
    journeyHrs : number;
    durationMins:number;
    noOfPassengers : number;
    ticketRate : number;

    constructor(ticketNumber : number, passengerName : string, flightName : string, flightNumber : string, source : string, destination : string, departureDate : Date, departureTime : Date, arrivalTime : Date, journeyHrs : number, durationMins: number, noOfPassengers : number, ticketRate: number){
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
        this.durationMins=durationMins;
    }

}