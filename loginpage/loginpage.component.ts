import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { AuthenticateServiceService } from '../services/authenticate-service.service';
import { SearchFlightService } from '../services/search-flight.service';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  isValid : boolean;
  userDetails : Array<User>;
  constructor(private authService : AuthenticateServiceService, private router: Router,private srcFlight : SearchFlightService) {
    this.isValid = true;
    this.userDetails = [];
   }

   ngOnInit(): void{
    this.authService.getUserAuthDetails().subscribe(
      
      userList =>{
        this.userDetails = userList;
      }
    );
  }

  userAuthenticate(userLogin : any){
    
    let userAuthList = this.userDetails.slice();
   for(let userAuthDetail of userAuthList){
    if(userLogin.userName == userAuthDetail.userName && userLogin.userPassword ==userAuthDetail.userPassword){
      this.isValid = true;
      this.srcFlight.getCurrentUser(userAuthDetail);
      sessionStorage.setItem('ram', userLogin.adminId);
      console.log("hello");
      this.router.navigate(['/searchFlight']);
    }
    else{
      this.isValid = false;
    }
   }
  }
   
 goToRegistration(){
   this.router.navigate(["/register"]);
 }

}
