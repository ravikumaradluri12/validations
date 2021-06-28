import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateServiceService } from './authenticate-service.service';
//import { AuthenticateServiceService } from '../services/authenticate-service.service';

AuthenticateServiceService
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authenticateService : AuthenticateServiceService, private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    
    if(this.authenticateService.isAdminLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/adminLogin']);
      return false;
    }
  }
}
