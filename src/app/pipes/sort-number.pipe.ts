import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

/*  transform(arrayNumber: number[], sortValue?: number): any {
    console.log(typeof sortValue);
    arrayNumber.sort((a, b) => {
      if (a > b) {
        return 1;
      }else if (a < b) {
        return -1;
      }else {
        return 0;
      }
    });

    if (sortValue === -1) {
      arrayNumber.reverse();
    }
    return arrayNumber;
  }*/

  transform(arrayNumber: number[], sortValue: number): any {
   // console.log(typeof sortValue);
    const result =  arrayNumber.sort((a, b) => {
      if (a > b) {
        return sortValue;
      }else if (a < b) {
        return -sortValue;
      }else {
        return 0;
      }
    });
    return [...result];
  }

}
