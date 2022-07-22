import { Component, OnInit } from '@angular/core';
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

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroesService.getHeroes().subscribe(heroes=>this.heroes=heroes);

  }

}
