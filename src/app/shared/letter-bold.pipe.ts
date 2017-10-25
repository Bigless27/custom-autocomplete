import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'letterBold'})
export class LetterBoldPipe implements PipeTransform {
    transform(value: any, search: any): any {
        if (!search) { return value; }
       let  holder = value.split('');
       let indexs = this.locations(search, value )  // to lower case or use lowercase pipe
       indexs.forEach( (i) => {
            holder.splice(i, 0 , "<span class = 'bold'>")
            holder.splice(i + search.length + 1, 0,  "</span>")
       })
        return holder.join('');
    }

//dont forget to lower case;
    locations(substring, searchValue) {
        let indexs = [], i = -1, spacer = 0;
        while ( (i = searchValue.indexOf(substring, i + 1 )) >= 0) {
            indexs.length > 0  ? indexs.push( i + (spacer += 2 ))  : indexs.push(i);
        }
        return indexs;
    }
}