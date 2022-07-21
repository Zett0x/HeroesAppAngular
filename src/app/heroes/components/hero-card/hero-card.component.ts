import { Component, Input, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  @Input() hero!:Hero;
  constructor() {

   }

  ngOnInit(): void {
  }

}
