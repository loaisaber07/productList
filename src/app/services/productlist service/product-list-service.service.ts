import { Injectable } from '@angular/core';
import { Iproduct } from '../../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService { 
  private productsList:Iproduct[];
  productListByCatId:Iproduct[]={} as Iproduct[]; 
  constructor() { 
    this.productsList=[
      {id:100 , name:`toshiba` , imageURL:`https://picsum.photos/200/300`,price:100,quantity:10,categoryId:1},
      {id:150 , name:`toshiba` , imageURL:`https://picsum.photos/200/300`,price:200,quantity:30,categoryId:1},
      {id:200 , name:`lonovo` , imageURL:`https://picsum.photos/200/300`,price:300,quantity:20,categoryId:2},
      {id:250 , name:`lonovo` , imageURL:`https://picsum.photos/200/300`,price:400,quantity:50,categoryId:2},
      {id:300 , name:`samsung` , imageURL:`https://picsum.photos/200/300`,price:700,quantity:70,categoryId:3},
      {id:350 , name:`samsung` , imageURL:`https://picsum.photos/200/300`,price:750,quantity:75,categoryId:3}
    ] ; 


  } 
  GetAllProducts():Iproduct[]
  {
    return this.productsList;
  } 
  GetProductsListByCatId(catId:number):Iproduct[] {

    if(catId==0) {
this.productListByCatId = this.productsList;
    } 
    else{
      this.productListByCatId = this.productsList.filter(prd=>catId==prd.categoryId)
    } 
    return this.productListByCatId;
  } 
  GetProductListById(Id:number):Iproduct | null{
      let getfoundprdlistbyid = this.productsList.find(prd=>Id==prd.id) ; 
      return getfoundprdlistbyid ? getfoundprdlistbyid : null ; 
  } 
  GetAllProductByIDS() :number[]{

let prdIds:number[] =this.productsList.map(element=>element.id);
return prdIds;
  }
}
