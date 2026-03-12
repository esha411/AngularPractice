import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return '';
    if(value.length>30){
      return value.substring(0,100) + '...';
    }
    return value;
  }

}
