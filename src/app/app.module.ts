import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
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
@NgModule({
  declarations: [					
    AppComponent,
    ProductListComponent,
    MyComponentComponent,
    NavbarComponent,
      FilterPipe,
      SumPipe,
      ReversePipe,
      RatingComponent
   ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
