import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    if(value){
      var newvalue='';
      for(var i=value.length-1;i>=0;i--){
           newvalue+=value[i];
      }
      value=newvalue;
    }
    return value;
  }

}
