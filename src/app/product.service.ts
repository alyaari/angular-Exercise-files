import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {IProduct} from './product-list/IProduct'
import { environment } from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn:"root"
})

export class ProductService {
  apiUrl=environment.apiurl;
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   public myobject="my object from service";
 
   getProducts(){
      return this.http.get<any>(this.apiUrl+"/Products", this.httpOptions).pipe(
        map(res=> 
          {
            debugger
         return res.value;
          })
      )
  }
 
getProductById(id){
    return this.http.get<any>(this.apiUrl+"/Products("+id+")", this.httpOptions)
    
}
add(product){
    return this.http.post<any>(this.apiUrl+"/Products",product, this.httpOptions)
}
patch(product){
    return this.http.patch<any>(this.apiUrl+"/Products("+product.productId+")",product, this.httpOptions)
}
  searchProducts(key){
    return this.http.get<any>(this.apiUrl+`/Products?$filter=contains(productName,'${key}')`, this.httpOptions).pipe(
      map(res=> 
        {
       return res.value;
        })
    )
}
}
