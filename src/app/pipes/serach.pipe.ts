import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(items: any[], term): any {
    return term ? items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase())  !==-1):items;
  }

}
