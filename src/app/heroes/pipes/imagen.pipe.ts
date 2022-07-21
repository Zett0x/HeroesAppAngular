import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hero:Hero): string{
    return hero.alt_img || `../../assets/heroes/${hero.id}.jpg`;
  }

}
