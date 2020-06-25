import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DevicedataService } from './devicedata.service';
import { LoginComponent } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private loginComponentService:DevicedataService, 
    private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("route Gaurd service called")
    if (this.loginComponentService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate([''])
      return false;
    }
  }
}
