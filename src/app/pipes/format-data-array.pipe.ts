import { Pipe, PipeTransform } from '@angular/core';
import {isNumber, isUndefined} from "util";

@Pipe({
  name: 'formatDataArray'
})
export class FormatDataArrayPipe implements PipeTransform {

  transform(value: any[], itemNumber?: number): any {
    if (isUndefined(itemNumber)) {
      if (value.length < 2) {
        return value;
      }
    }
    if (!isUndefined(itemNumber) && isNumber(itemNumber)) {
      let valueStr = '';
      for (let i = 0; i < itemNumber; i++) {
        valueStr += value[i];
        valueStr += (i === itemNumber - 1) ? '' : ',';
      }
      return valueStr + '...';
    }else {
      return value[0] + ', ' + value[1] + '...';
    }
  }

}
