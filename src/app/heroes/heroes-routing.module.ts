import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'list',
        component:HeroesListComponent
      },
      {
        path:'add',
        component:AddComponent
      },
      {
        path:'edit/:id',
        component:AddComponent
      },
      {
        path:'search',
        component:SearchComponent,

      },
      {
        path:':id',
        component:HeroComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }
    ]
  }

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
