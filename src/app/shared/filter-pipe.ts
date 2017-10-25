import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: string, prop = null): any {
         if  (!search) {return value; }
         let solution = value.filter(v => {
            if ( !v ) { return; }
            return prop
                         ?
                         v[prop].toLowerCase().indexOf(search.toLowerCase()) !== -1
                         :
                         v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
                        });
         return solution;
    }
};