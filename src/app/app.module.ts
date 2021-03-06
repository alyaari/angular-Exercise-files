import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyComponentComponent } from './my-component/my-component.component';
import {NavbarComponent} from './shaird/navbar/navbar.component'
import { from } from 'rxjs';
import { FilterPipe } from './filter.pipe';
import { SumPipe } from './sum.pipe';
import { ReversePipe } from './reverse.pipe';
import { RatingComponent } from './rating/rating.component';
import{ProductService}from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ReactFormComponent } from './react-form/react-form.component';
@NgModule({
  declarations: [									
    AppComponent,
    ProductListComponent,
    MyComponentComponent,
    NavbarComponent,
      FilterPipe,
      SumPipe,
      ReversePipe,
      RatingComponent,
      HomeComponent,
      ProductDetailsComponent,
      CreateProductComponent,
      ReactFormComponent
   ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
