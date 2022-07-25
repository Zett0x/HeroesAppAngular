import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(id:string | undefined): string {
    if(!id){
      return 'Nuevo'
    }
    return 'Editar';
  }

}
