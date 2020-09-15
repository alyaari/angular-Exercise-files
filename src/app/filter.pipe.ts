import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, key: string='',field:string='productName'): any {
 
    if (value) {
      value = value.filter(a =>
        a[field].toString().toLowerCase().includes(key.toLowerCase())
      )
    }
    return value;
  }
 
}
