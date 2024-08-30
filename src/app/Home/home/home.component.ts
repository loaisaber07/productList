import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent { 
  ShowFlag:boolean=true;
  constructor(){}
  Toggle(){
    this.ShowFlag= !this.ShowFlag;
  }

}
