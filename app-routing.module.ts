import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
//import { ViewallbookinghistoryComponent } from './viewallbookinghistory.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LogoutComponent } from './logout/logout.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { ProceedBookingComponent } from './proceed-booking/proceed-booking.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ViewBookingHistoryComponent } from './view-booking-history/view-booking-history.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { ScheduleflightComponent } from './scheduleflight/scheduleflight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdatescheduleflightComponent } from './updatescheduleflight/updatescheduleflight.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
//import { AuthGuardService } from './authguardservice/auth-guard.service';
//import { UserauthguardService } from './authguardservice/userauthguard.service';
//import { ReginstrationpageComponent } from './userregistration/reginstrationpage.component';
//mport { UserRegistrationpageComponent } from './userregistration1/userregistration.component';
import { ViewallbookinghistoryComponent } from './viewallbookinghistory/viewallbookinghistory.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserauthguardService } from './services/userauthguard.service';
import { UserregistrationComponent } from './userregistration/userregistration.component';




const routes: Routes = [
  {path : "", component : HomepageComponent},
  //{path : "about", component : AboutComponent},
  //{path : "contact", component : ContactComponent},
  {path : "userLogin", component : LoginpageComponent},
  {path : "adminLogin", component : AdminloginComponent},
  {path : "register", component : UserregistrationComponent },
  
  {path : "ticketBooking", component : TicketBookingComponent},
  {path : "viewBooking", component : ViewBookingHistoryComponent, },
  {path : "addFlight", component : AddFlightComponent, },
  {path : "tickets", component : FlightDetailsComponent},
  {path : "flightDetails", component : ViewflightsComponent},
  {path : "logout", component : LogoutComponent, canActivate :[AuthGuardService]},
  {path : "userLogout", component : UserLogoutComponent, canActivate :[UserauthguardService]},
  {path : "searchFlight", component : SearchFlightComponent},
  {path : "showTicket", component : ShowTicketComponent},
  {path : "ticketBooking/confirmBooking/:id", component : ConfirmBookingComponent},
  {path : "adminMenu", component : AdminMenuComponent},
  {path : "viewAllBookings", component : ViewallbookinghistoryComponent},
  {path : "flightDetails/updateFlight/:id", component : UpdateFlightComponent},
  {path : "proceedBooking", component : ProceedBookingComponent},
  {path : "scheduleflight", component : ScheduleflightComponent},
  {path : "scheduledflightDetails", component : FlightDetailsComponent},
  
  {path : "scheduledflightDetails/updateSheduledFlight/:id", component : UpdatescheduleflightComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
