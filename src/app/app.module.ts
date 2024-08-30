import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListServiceService } from './services/productlist service/product-list-service.service';
import { CommonModule } from '@angular/common';
import { ProductsListViewComponent } from './ProductsList Components/products-list-view/products-list-view.component';
import { HeaderComponent } from './Header/header/header.component';
import { SideBarComponent } from './SideBar/side-bar/side-bar.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { MasterViewComponent } from './MasterView/master-view/master-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home/home.component';
import { OrderComponent } from './Order/order/order.component';
import { ProductDetailsComponent } from './ProductDetailsComponent/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { LoginComponentComponent } from './loginComponent/login-component/login-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddComponentComponent } from './AddComponent/add-component/add-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroAppComponent } from './dfsfd/hero-app/hero-app.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsListViewComponent,
    HeaderComponent,
    SideBarComponent ,
    FooterComponent,
    MasterViewComponent,
    HomeComponent,
    OrderComponent,
    ProductDetailsComponent,
    LoginComponentComponent,
    AddComponentComponent,
    HeroAppComponent,
    ReactiveFromComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule , 
    HttpClientModule, 
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule


    
    
  ],
  providers: [
    provideClientHydration() ,
    ProductListServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
