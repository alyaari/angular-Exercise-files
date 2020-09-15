import { Component, OnInit, OnChanges } from '@angular/core';
import{IProduct} from './IProduct';
import { from, combineLatest, Observable } from 'rxjs';
import { isNgTemplate, ThrowStmt } from '@angular/compiler';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnChanges {
  title:string="المنتجات"
  constructor(public ps:ProductService) { }
  imageWidth:number=50;
  imageMargin:number=2;
  products: IProduct[] ;
ngOnChanges(){
  console.log('component is change')
}
ratingChange(product:IProduct,event){
  product.starRating=event
  debugger;
console.log(event)
}
  ngOnInit(): void {
  // console.log('component is Init')
    let prod:IProduct={productId:25,productName:"apple"};
  this.ps.getProducts().subscribe(res=> {
    this.products=res;
  });
  // this.products=this.ps.getProducts();
    // this.datasource=this.products;
  }

  showimages:boolean=false;
  rating(item:IProduct, event){
    // alert(event.msg);
    // console.log(event);
    // this.title=this.title+event.star
    item.starRating=event.star;
  }
key:string="";

ShowImages(event):void{
 debugger
 this.showimages=!this.showimages;
  }
  
datasource:any[];

search(){
 
 this.ps.searchProducts(this.key).subscribe(res=>{
   this.products=res;
 })
}

}
