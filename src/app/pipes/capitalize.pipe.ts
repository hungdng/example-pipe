import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const arrStr = value.split(' ');
    let result = '';
    arrStr.forEach((str, index) => {
      result += str.trim().charAt(0).toUpperCase() + str.substring(1) + ((index === arrStr.length - 1) ? '' : ' ');
    });
    return result;
  }

}
