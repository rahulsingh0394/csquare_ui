import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
    }
}

@Pipe({name: "sortBy"})
export class SortPipe {
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
	    if ( a[args] < b[args] ){
	    	return -1;
	    }else if( a[args] > b[args] ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  }
}

@Pipe({
    name: 'fireFilter'
  })
  export class FireFilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if(!items) return [];
      if(!searchText) return items;
  searchText = searchText.toLowerCase();
   ;
  return items.filter( it => {
        return JSON.stringify(it).toLowerCase().includes(searchText);
      });
     }
  }