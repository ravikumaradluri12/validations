import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/model/Admin.model';
import { User } from 'src/app/model/User.model';
import { FlightAppHttpService } from './flight-app-http.service';
import { map } from 'rxjs/operators';

const VALIDATION_URL="http://localhost:9090//bookflightapp/adminLogin";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {

  constructor(private adminDetails : FlightAppHttpService,private http : HttpClient) { }

  
  // getadminAuthDetails():Observable<Admin[]>{
  //   console.log("entered service")
  //   console.log(this.adminDetails.getAdminDetails())
  //   return this.adminDetails.getAdminDetails();
  // }

  getadminAuthDetails(){
   
    return this.adminDetails.getAdminDetails();
  }

  getUserAuthDetails(){
    return this.adminDetails.getUserDetails();
  }
  // adminLogin(adminId : string, password : string){
  //   console.log("admin ID: " +adminId);
  //   console.log("password : " +password);
  //   console.log("inside auth service");
  //   let authendicationToken = "Basic " + window.btoa(adminId + ":" + password);
  //   console.log("generated token: "+authendicationToken);
  //   let headers = new HttpHeaders({
  //     Authorization : authendicationToken
  //   });
  //   return this.http.get(VALIDATION_URL, {headers}).pipe(
  //     map(successData => {
  //       console.log("inside auth service success data:" +successData);
  //       sessionStorage.setItem('admin', adminId);
  //       sessionStorage.setItem('token', authendicationToken);
  //       return successData;
  //     }),
  //     map(failureData =>{
  //       console.log("inside auth service failure data:" +failureData);
  //       return failureData;
  //     })
  //   );
  // }
  getAuthToken(){
    if(this.isAdminLoggedIn()){
      return sessionStorage.getItem('token');
    }
    return null;
  }
isAdminLoggedIn():boolean{
  let admin = sessionStorage.getItem("admin");
  if(admin == null){
    return false;
  }
  else{
    return true;
  }
}
isUserLoggedIn(): boolean{
  let user = sessionStorage.getItem("rajesh");
  if(user == null){
    return false;
  }
  else{
    return true;
  }
}
userLoggedOut(){
  sessionStorage.removeItem("rajesh");
  
}
adminLoggedOut(){
  sessionStorage.removeItem("admin");
  sessionStorage.removeItem("token");
}
}
