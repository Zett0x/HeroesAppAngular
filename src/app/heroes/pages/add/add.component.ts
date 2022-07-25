import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  hero:Hero={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:'',
  }

  publishers:Publisher[]=[
    Publisher.DCComics,
    Publisher.MarvelComics
  ]

  constructor(private heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.heroesService.getHero(id))
    )
    .subscribe(hero=>this.hero=hero);
  }

  saveHero(){
    if(this.hero.superhero.trim().length===0) return;
    if(this.hero.id){
      //actualizar
      this.heroesService.updateHero(this.hero)
      .subscribe(hero=>console.log('updating...',hero));
    }else{
      //crear
          this.heroesService.addHero(this.hero)
        .subscribe(hero=>{
          this.router.navigate(['/heroes/edit',hero.id]);
        })

    }




  }
}
