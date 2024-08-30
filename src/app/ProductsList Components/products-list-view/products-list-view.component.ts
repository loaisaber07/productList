import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../iproduct';
import { ProductListServiceService } from '../../services/productlist service/product-list-service.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrl: './products-list-view.component.scss'
})
export class ProductsListViewComponent implements OnInit,OnChanges{ 
   productList:Iproduct[]={} as Iproduct[];
   productListByCatId:Iproduct[] = {} as Iproduct[];
  productListById:Iproduct | null = null ; 
  selectById:number=0;
  selectedByCatId:number =0; 
  constructor(private staticProductList : ProductListServiceService , 
  private  router:Router , 
  private prdService :ProductsService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
  //  this.productListByCatId=this.staticProductList.GetProductsListByCatId(this.selectedByCatId);
    //this.productListById =this.staticProductList.GetProductListById(this.selectById);
    this.prdService.getProductsByCategoryID(this.selectedByCatId).subscribe(prd=>{

      this.productList=prd ;
    });
    
  }
  ngOnInit(): void { 
  //  this.productList = this.staticProductList.GetAllProducts();
  this.prdService.getAllProducts().subscribe(prd=>{

    this.productList=prd ;
  })
  } 
  OpenDetails(prdId:number){
this.router.navigate(['/Products',prdId]);

  }

}
