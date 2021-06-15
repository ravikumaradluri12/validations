import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookFlight } from 'src/app/model/BookFlight.model';
import { Flight } from 'src/app/model/Flight.model';
import { ScheduleFlight } from 'src/app/model/ScheduleFlight.model';
import { User } from 'src/app/model/User.model';
import { SearchFlightService } from '../services/search-flight.service';
//import { FormControlConfig } from "@rxweb/reactive-dynamic-forms";





@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  searchFlightForm = new FormGroup({
    source: new FormControl(''),
    destination: new FormControl(''),
    departureTime: new FormControl('')
  });
  
  isContain : boolean;
  submitted = false;
  //searchFlightForm: FormGroup;
  fetchedFlighDetails : Array<ScheduleFlight>;
  departureDateSearch : String="";
  constructor(private route : Router, public searchFlights : SearchFlightService, private builder : FormBuilder) {
    this.isContain = true;
    this.fetchedFlighDetails = [];
   }

   ngOnInit(): void{
    this.searchFlightForm = this.builder.group({
      source : ["", Validators.required],
      destination : ["", Validators.required],
      departureTime : ["", Validators.required]
    });
    this.searchFlights.searchFlightDetails.splice(0,this.searchFlights.searchFlightDetails.length);
    this.searchFlights.getFlightDetails().subscribe(
      flightList =>{
        this.fetchedFlighDetails = flightList;
        console.log("#####"+JSON.stringify(flightList));
        console.log("$$$$$$$$"+this.searchFlights.currentUser);
      }
    );
    var currentDate = new Date().toISOString().slice(0, 10);
     this.departureDateSearch = currentDate;
  }
  get searchFlightFormControl() {
    return this.searchFlightForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.searchFlightForm.valid) {
      let availableFLights = this.fetchedFlighDetails.slice();
      for(var i = 0; i<availableFLights.length; i++){
      if(availableFLights[i].source === this.searchFlightForm.value.source && availableFLights[i].destination === this.searchFlightForm.value.destination 
       && new Date(availableFLights[i].departureTime).toDateString() === new Date(this.searchFlightForm.value.departureTime).toDateString()){
        
         let showAvlFlight : BookFlight;
         var durTimeHrs = new Date(availableFLights[i].arrivalTime).getHours() - new Date(availableFLights[i].departureTime).getHours();
         var durTimeMins = Math.floor(durTimeHrs/ 60 / 1000);
         showAvlFlight = new BookFlight(availableFLights[i].flightName, availableFLights[i].flightNumber,availableFLights[i].totalSeat,availableFLights[i].source,availableFLights[i].destination,availableFLights[i].departureTime,availableFLights[i].arrivalTime,durTimeHrs, durTimeMins, availableFLights[i].ticketRate);
         this.searchFlights.getAvailableFlights(showAvlFlight);
         this.isContain = true;
         this.route.navigate(['/ticketBooking']);
       }
       else{
         this.isContain = false;
       }
     }
    }
  }
  // searchAvailableFlights(searchFlight : any){
  //   let availableFLights = this.fetchedFlighDetails.slice();
  //  for(var i = 0; i<availableFLights.length; i++){
  //  if(availableFLights[i].source === searchFlight.source && availableFLights[i].destination === searchFlight.destination 
  //   && new Date(availableFLights[i].departureTime).toDateString() === new Date(searchFlight.departureTime).toDateString()){
     
  //     let showAvlFlight : BookFlight;
  //     var durTimeHrs = new Date(availableFLights[i].arrivalTime).getHours() - new Date(availableFLights[i].departureTime).getHours();
  //     var durTimeMins = Math.floor(durTimeHrs/ 60 / 1000);
  //     showAvlFlight = new BookFlight(availableFLights[i].flightName, availableFLights[i].flightNumber,availableFLights[i].totalSeat,availableFLights[i].source,availableFLights[i].destination,availableFLights[i].departureTime,availableFLights[i].arrivalTime,durTimeHrs, durTimeMins, availableFLights[i].ticketRate);
  //     this.searchFlights.getAvailableFlights(showAvlFlight);
  //     this.isContain = true;
  //     this.route.navigate(['/ticketBooking']);
  //   }
  //   else{
  //     this.isContain = false;
  //   }
  // }
//}
}
