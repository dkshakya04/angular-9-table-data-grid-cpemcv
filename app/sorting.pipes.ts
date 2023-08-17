import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingFilter',
  pure:false
})
export class SortingPipes implements PipeTransform {

  transform(items , sortType: string , sortKey : string  ): any {
    {
      console.log('sorttype i got',sortType);
     // let key = 'id';
     if(sortType === 'asec'){
       items.sort((a,b)=>{
   return a[sortKey] > b[sortKey];
});
     }
     else{
       items.sort((a,b)=>{
   return a[sortKey] <  b[sortKey];
}); 
     }
     console.log('sorting',items);
     return items;
    }
  }
}
