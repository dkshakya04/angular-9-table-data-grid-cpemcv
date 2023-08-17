import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash'; 
@Pipe({
  name: 'selectionFilter',
 pure: false
})
export class SelectionPipes implements PipeTransform {

  transform(items, filterKeys): any {
    {
      console.log('Key i got', filterKeys);
      let filterDataValue = items.reduce((dataArr, value) => {
        let filterData = _.omit(value, filterKeys);
        dataArr.push(filterData);
        return dataArr;
      }, []);
      return filterDataValue;
    }
  }
}
