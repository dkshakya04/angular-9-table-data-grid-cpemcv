import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pagination',
 pure: false})
export class Pagination implements PipeTransform {
  transform(dataArray , sizeOfPage , currentPage  ) {
  let size = (currentPage)*sizeOfPage;
 
//pagination
  let copyArray = dataArray.slice(size,size+sizeOfPage);

//sorting based on type


//filter based up selection
// console.log('Key i got',filterKeys);
// let  filterDataValue = copyArray.reduce((dataArr,value)=>{
//     let filterData =_.omit(value,filterKeys);
//     dataArr.push(filterData); 
//     return dataArr;
// },[]);
//   console.log('copy',filterDataValue);
//   return filterDataValue;
return copyArray;
  }


}