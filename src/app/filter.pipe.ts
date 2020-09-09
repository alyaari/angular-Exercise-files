import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   let key=args[0]||"";
  let p= args[1];
if(value){
  value=value.filter(a=>
    a.productName.toLowerCase().includes(key.toLowerCase())
   
    )
}
    return value;
  }

}
