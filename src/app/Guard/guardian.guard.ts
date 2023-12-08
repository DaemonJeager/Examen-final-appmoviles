import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { StateService } from '../service/state.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {
  constructor(
    private router: Router,
    private stateService: StateService
  ) {}


  canActivate(): boolean {
    let isLogged:boolean = false;
    this.stateService.userIsLogged().subscribe(
      (logged) => {
        isLogged = logged;
      }
    );
    if(isLogged == false){
    
      this.router.navigate(['/login']);
    }
    return isLogged;
  
}}