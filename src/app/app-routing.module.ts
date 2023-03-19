import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path:'',
    component: CharactersComponent
  },
  {
    path:'characters',
    component: CharactersComponent
  },
  {
    path:'character/:characterId',
    component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
