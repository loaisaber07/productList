import { Component } from '@angular/core';
import { Iproduct } from '../../iproduct';
import { ProductsService } from '../../services/products.service';
import { Icategory } from '../../Category/icategory';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrl: './add-component.component.scss'
})
export class AddComponentComponent {  
  categoryList:Icategory[]; 
  sumbitedProduct :Iproduct ={} as Iproduct;
  constructor(private prdservice:ProductsService){ 
    this.categoryList=[{id:1,name:"toshiba"},{id:2,name:"lonovo"},{id:3,name:"samsung"}]; 

  }
addproduct(){
  alert("aadd successfully");
 
this.prdservice.addProduct(this.sumbitedProduct).subscribe(prd=>{

  alert("aadd successfully");
  
}

)
}
}
