import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: any[], field:string): any {
var sum=0;
value.forEach(element=>{
  sum+=element[field];
});

// for(var i=0;i<value.length;i++)
// {
  
//   sum+=value[i][field];
// }
    return sum;
  }

}
