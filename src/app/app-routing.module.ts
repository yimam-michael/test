import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album/album.component';
import { CatFactComponent } from './cat-facts/cat-fact/cat-fact.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'cat-fact', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'cat-fact', component: CatFactComponent },
  { path: 'album', component: AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
