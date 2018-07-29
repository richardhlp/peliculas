import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  {path: 'resultado-busqueda/:texto', component: ResultadoBusquedaComponent},
  {path: 'categorias/:categoria', component: CategoriasComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes, {useHash: true})]
})
export class AppRoutingModule { }
