import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductListServiceService } from '../../services/productlist service/product-list-service.service';
import { Iproduct } from '../../iproduct';
import { Icategory } from '../../Category/icategory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnChanges,OnInit{
  SelectCategoryId:number = 0;   
  categortList:Icategory[]={} as Icategory[];
  productListByCatId:Iproduct[]={} as Iproduct[];
  constructor(private staticProductList:ProductListServiceService){
    this.productListByCatId =this.staticProductList.GetAllProducts(); 
    this.categortList=[
      {id:1 , name:`toshiba`} , 
      {id:2,name:`lonovo`},
      {id:3 , name:`samsoung`}
    ];

  } 
  ngOnInit(): void { 
    this.productListByCatId=this.staticProductList.GetAllProducts();
  }
  ngOnChanges(changes: SimpleChanges): void { 
    this.productListByCatId=this.staticProductList.GetProductsListByCatId(this.SelectCategoryId);

  }

}
