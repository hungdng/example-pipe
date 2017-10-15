import {Pipe, PipeTransform} from '@angular/core';
import {orderBy} from 'lodash';

// Install lodash npm install @types/lodash -save
@Pipe({
  name: 'sortx'
})
export class SortPipe implements PipeTransform {

  // sort cach truyen thong viet tay
  /*transform(products: any[], sortBy: string, sortValue: number): any {
    if (sortBy === 'name') {
      products.sort((a, b) => {
        if (a.name > b.name) {
          return sortValue;
        } else if (a.name < b.name) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }

    if (sortBy === 'price') {
      products.sort((a, b) => {
        if (a.price > b.price) {
          return sortValue;
        } else if (a.price < b.price) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    return products;
  }*/

  // Sort su dung thu vien lodash
  transform(products: any[], sortBy: string, sortValue: number): any {
    /*if (sortBy === 'name') {
     products = orderBy(products, ['name'], [sortValue === 1 ? 'asc' : 'desc']);
    }

    if (sortBy === 'price') {
      products = orderBy(products, ['price'], [sortValue === 1 ? 'asc' : 'desc']);
    }*/

    products = orderBy(products, [sortBy], [sortValue === 1 ? 'asc' : 'desc']);
    return products;
  }

}
