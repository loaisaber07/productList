import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Route,Router,RouterModule} from '@angular/router';

import { Iproduct } from '../../iproduct';
import { ProductListServiceService } from '../../services/productlist service/product-list-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit { 
  currentId:number=0;  
  currentProduct:Iproduct|null= null; 
  allProductsByIDS:number[]=[];
  constructor(private staticRouter:ActivatedRoute , private prdService:ProductListServiceService
    ,private location:Location , private router:Router
  ){}

  ngOnInit() {
      this.staticRouter.paramMap.subscribe( 
        (params)=>{
          this.currentId =Number(params.get('pid')); 
          this.currentProduct = this.prdService.GetProductListById(this.currentId);

        }  
      )
      this.allProductsByIDS = this.prdService.GetAllProductByIDS();
  }
  GOBack(){
this.location.back();

  }
  PreviousProduct(){
let  currentIndex =this.allProductsByIDS.findIndex(element=>element==this.currentId);
let previousIndex
if(currentIndex >0){
 previousIndex = this.allProductsByIDS[currentIndex-1];
this.router.navigate(['/Products',previousIndex]);
}
  }
  NextProduct(){
    let  currentIndex =this.allProductsByIDS.findIndex(element=>element==this.currentId);
    let NextId ;
if(currentIndex <this.allProductsByIDS.length){
 NextId= this.allProductsByIDS[currentIndex+1];
this.router.navigate(['/Products',NextId]);
}
  }
  


}
