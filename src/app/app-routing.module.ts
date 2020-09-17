import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/details/:pid', component: ProductDetailsComponent }  ,
  { path: 'products/add', component: CreateProductComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ,RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
