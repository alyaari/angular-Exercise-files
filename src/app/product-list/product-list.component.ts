import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:string="المنتجات"
  constructor() { }
  imageWidth:number=50;
  imageMargin:number=2;
  products: any[] = 
  [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ];
  ngOnInit(): void {
    this.datasource=this.products;
  }

  showimages:boolean=false;

key:string="";

  ShowImages(event):void{
 debugger
 this.showimages=!this.showimages;
  }
  
datasource:any[];

search(){

this.products=this.datasource.filter(a=>
  a.productName.toLowerCase().includes(this.key.toLowerCase())
  ||a.productId.toString().toLowerCase().includes(this.key.toLowerCase())
  )
}

}
