import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterParams'
})
export class FilterParamsPipe implements PipeTransform {

  transform(items:any[],id): any {    
    console.log(id)
    if(!items) return [];
    if(!id) return items;
    return items.filter(it =>{
        return it.id_param_general_tipo == id
    })    
  }
}
