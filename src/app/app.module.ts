import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyComponentComponent } from './my-component/my-component.component';
import {NavbarComponent} from './shaird/navbar/navbar.component'
import { from } from 'rxjs';
@NgModule({
  declarations: [	
    AppComponent,
    ProductListComponent,
    MyComponentComponent,
    NavbarComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
