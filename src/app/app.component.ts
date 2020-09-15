import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'my-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
  constructor(public ps:ProductService)
  {
    ps.myobject="new value form app comp";
  }
}
