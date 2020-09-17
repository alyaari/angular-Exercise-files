import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product-list/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: IProduct;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }


  ngOnInit() {
    this.restform();
  }

  restform() {
    this.product = { productName: 'defaultname', description: '', imageUrl: '', price: 0, productCode: '', releaseDate: new Date() }
  }

  save() {
    this.productService.add(this.product).subscribe(res => {
alert('تم الحفظ ')
this.product=res;
this.restform();
    }, (error) => {
      console.log(error);
    });

  }
}
