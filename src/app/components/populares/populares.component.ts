import { Component } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {Router} from '@angular/router';
import { ObjetoAArrayPipe } from '../../pipes/objeto-a-array.pipe';
@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styles: []
})
export class PopularesComponent {
  pelicula: any = {};

  constructor(private peliservice: PeliculasService,
     private router: Router
 ) {
  this.peliservice.getPopulares().subscribe(data => {
    console.log(data['results']);
    this.pelicula = data['results'];
  });
 }

}
