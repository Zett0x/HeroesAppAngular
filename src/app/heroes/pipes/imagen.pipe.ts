import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hero:Hero): string{
    if(!hero.id){
      return 'assets/no-image.png';
    }
    else if(hero.alt_img){
      return hero.alt_img;
    }


    return `assets/heroes/${hero.id}.jpg`;
  }


}
