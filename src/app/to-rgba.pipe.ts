import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRgba'
})
export class ToRgbaPipe implements PipeTransform {

  transform(value: [number, number, number], ...args: [number?]): string {
    const alpha: number = args[0] || 1;
    
    return 'rgba(' + value.join(',') + ',' + alpha + ')';
  }

}
