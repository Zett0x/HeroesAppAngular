import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hero:Hero): string{

    if(hero.id && hero.id.length>0 && !hero.alt_img?.length){
      return `assets/heroes/${hero.id}.jpg`;
    }
    else if(!hero.id && hero.alt_img){
      return 'assets/no-image.png';
    }

    return hero.alt_img || '';

  }


}
