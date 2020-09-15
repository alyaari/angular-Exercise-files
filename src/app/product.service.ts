import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IProduct} from './product-list/IProduct'
import { environment } from '../environments/environment';
 

@Injectable({
  providedIn:"root"
})
export class ProductService {
  apiUrl=environment.apiurl;
  constructor(private http:HttpClient) { }
   public myobject="my object from service";
 
   getProducts(){
      return this.http.get<IProduct[]>("assets/data/products.json")
  }
}
