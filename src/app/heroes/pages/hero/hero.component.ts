import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero!:Hero;

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {

    /* this.activatedRoute.params.subscribe(({id})=>{
     this.heroesService.getHero(id).subscribe(resp=>{
      this.hero=resp;
     });
    }); */

    this.activatedRoute.params.pipe(switchMap(({id})=>this.heroesService.getHero(id))).subscribe(heroe=>this.hero=heroe)

  }

  backPage(){
    this.router.navigate(['/heroes/list']);
  }

}
