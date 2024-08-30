import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from '../../services/Login/Logout/login-authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent implements OnInit {  
  isUserLogged:boolean=false; 
  constructor(private loginService : LoginAuthenticationService){} 
  ngOnInit(): void {
    this.isUserLogged=this.loginService.isUserLogged;
  }

  
  login(){  
    this.loginService.login("loai","amir"); 
    this.isUserLogged=this.loginService.isUserLogged;
  }
  logout(){
    this.loginService.logout();
    this.isUserLogged=this.loginService.isUserLogged;
  }

}
