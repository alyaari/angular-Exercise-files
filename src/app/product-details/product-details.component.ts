import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product-list/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct;
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    let id=this.route.snapshot.params["pid"];
this.productService.getProductById(id).subscribe(res=>{
  this.product=res;
})
  }

}
