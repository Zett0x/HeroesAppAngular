import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Hero } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private API_URL:string=environment.API_URL;

  constructor(private http:HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.API_URL}/heroes`);
  }

  getHero(id:string):Observable<Hero>{
    return this.http.get<Hero>(`${this.API_URL}/heroes/${id}`);
  }

  getSuggestions(termino:string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.API_URL}/heroes?q=${termino}&_limit=6`);
  }

  addHero(hero:Hero):Observable<Hero>{

    return this.http.post<Hero>(`${this.API_URL}/heroes`,hero);

  }
  updateHero(hero:Hero):Observable<Hero>{

    return this.http.put<Hero>(`${this.API_URL}/heroes/${hero.id}`,hero);

  }

  deleteHero(id:string):Observable<any>{

    return this.http.delete(`${this.API_URL}/heroes/${id}`);

  }

}
