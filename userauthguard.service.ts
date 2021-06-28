import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateServiceService } from './authenticate-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardService {

  constructor(private authenticateService : AuthenticateServiceService, private router : Router) { }
  
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    
    if(this.authenticateService.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/userLogin']);
      return false;
    }
  }
}
