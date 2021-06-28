import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateServiceService } from './authenticate-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth : AuthenticateServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if(this.auth.isAdminLoggedIn()){
    //   let authToken = this.auth.getAuthToken();
    //   console.log("authendication tocken in inteceptor: " +authToken);
    //   req = req.clone({
    //     setHeaders : {
    //       Authorization : authToken
    //     }
    //   });
    // }
    return next.handle(req);
  }
}
