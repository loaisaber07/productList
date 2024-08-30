import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ProductsListViewComponent } from './ProductsList Components/products-list-view/products-list-view.component';
import { OrderComponent } from './Order/order/order.component';
import { MasterViewComponent } from './MasterView/master-view/master-view.component';
import { ProductDetailsComponent } from './ProductDetailsComponent/product-details/product-details.component';
import { LoginComponentComponent } from './loginComponent/login-component/login-component.component';
import { AuthGuard } from './Guard/authentication.guard';
import { AddComponentComponent } from './AddComponent/add-component/add-component.component';
import { HeroAppComponent } from './dfsfd/hero-app/hero-app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';

const routes: Routes = [ 

   {path: '' , component:MasterViewComponent , children:[

    {path:'', redirectTo:'/Home' ,pathMatch:'full'},
    {path:'Home',component:HomeComponent}, 
    {path:'Products' ,component:ProductsListViewComponent},
    {path:'Products/:pid' ,component:ProductDetailsComponent},
    {path:'Product/Add' , component:AddComponentComponent} , 
    {path:'Loai' , component:HeroAppComponent} ,
    {path:'Reactive' , component:ReactiveFromComponent}


  ]},
  {path:'Order',  component:OrderComponent , canActivate:[new AuthGuard().createAuthGuardFn()]}  , 
  {path:'Login' , component:LoginComponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
