import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyComponentComponent } from './my-component/my-component.component';
import {NavbarComponent} from './shaird/navbar/navbar.component'
import { from } from 'rxjs';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [		
    AppComponent,
    ProductListComponent,
    MyComponentComponent,
    NavbarComponent,
      FilterPipe
   ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
