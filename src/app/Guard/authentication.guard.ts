import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor( ) {}

  // Create a custom CanActivate function using a higher-order function
  createAuthGuardFn(): CanActivateFn {
    // Inject the AuthService into the guard function
    return (route, state) => { 
      return true;
      
    };
  }
}
