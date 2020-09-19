import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product-list/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  constructor(private productService: ProductService,private route:ActivatedRoute) { }
  productForm: FormGroup;
id;
  restform() {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      description: new FormControl(''),
      imageUrl: new FormControl(''),
      starRating: new FormControl(''),
      price:new FormControl(''),
      productCode: new FormControl(''),
      releaseDate: new FormControl(''),
      productId: new FormControl('')
    });
  }
  ngOnInit() {
    this.restform();
    this.id=this.route.snapshot.params["id"];
 this.productService.getProductById(this.id).subscribe((porduct:IProduct)=>{
  this.productForm.patchValue({
    productName:porduct.productName,
    starRating:porduct.starRating,
    price:porduct.price,
    description:porduct.description,
    productId:porduct.productId
  })
 })

  }
  save() {
    if (this.productForm.valid)
      this.productService.patch(this.productForm.value).subscribe(res => {
        alert('تم الحفظ ')
       // this.restform();
      }, (error) => {
        console.log(error);
      });

  }
}
