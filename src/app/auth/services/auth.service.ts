import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap,of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL:string=environment.API_URL;
  private _auth:Auth | undefined;

  constructor(private http:HttpClient) { }


  get auth():Auth{
    return {...this._auth!};
  }

  checkAuth():Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
    .pipe(
      map(auth=>{
        this._auth=auth;
        return true;
      })
    );

  }

  login(){
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
    .pipe(
      tap(auth=>this._auth=auth),
      tap(auth=>localStorage.setItem('token',auth.id))
    )
  }

  logout(){
    this._auth=undefined;
    localStorage.clear();
  }
}
