import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachId'
})
export class SerachIdPipe implements PipeTransform {

  transform(items: any[], term): any {
    return term ? items.filter(item => item.id == term):items;
  }

}
