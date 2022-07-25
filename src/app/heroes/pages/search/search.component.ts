import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino:string='';
  heroes:Hero[]=[];
  heroSelected!:Hero;

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    if(!this.termino) return;
    this.heroesService.getSuggestions(this.termino).subscribe(heroes=>this.heroes=heroes)

  }
  optionSelected(event:MatAutocompleteSelectedEvent){
    const heroe:Hero=event.option.value;
    this.termino=heroe.superhero;
    this.heroesService.getHero(heroe.id!)
    .subscribe(hero=>this.heroSelected=hero);
  }

}
