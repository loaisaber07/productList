import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {
  private isLoggedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
  }
  login(userName: string, password: string) {
    let token = `343234532`;
    localStorage.setItem(`token`, token);
    this.isLoggedSubject.next(true);

  }
  logout() {  
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);

  }
  get isUserLogged(): boolean {
    return localStorage.getItem(`token`) ? true : false;
  }
  getLoggedStatus() {
    return this.isLoggedSubject.asObservable();
  }
}
