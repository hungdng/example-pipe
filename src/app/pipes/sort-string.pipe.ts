import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortString'
})
export class SortStringPipe implements PipeTransform {

  transform(arrString: string[], sortValue: number): any {
    const result = arrString.sort();
    if (sortValue === -1) {
      const newResult = result.reverse();
      return [...newResult];
    }
    return [...result];
  }

}
