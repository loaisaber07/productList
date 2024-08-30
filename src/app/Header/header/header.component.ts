import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from '../../services/Login/Logout/login-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isUserlogged:boolean ;
  constructor(private loginservice:LoginAuthenticationService){
this.isUserlogged=false;
  }
  ngOnInit(): void { 
    this.loginservice.getLoggedStatus().subscribe(status=>{

      this.isUserlogged=status;
    })
  } 

}
