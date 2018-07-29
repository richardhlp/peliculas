import { Component } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ObjetoAArrayPipe } from '../../pipes/objeto-a-array.pipe';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styles: []
})
export class ResultadoBusquedaComponent {
  pelicula: any = {};
  texto: string;

  constructor(private peliservice: PeliculasService,
     private router: Router, activatedRoute: ActivatedRoute
 ) {

    activatedRoute.params.subscribe( parametros => {
      console.log(parametros);
       this.texto = parametros['texto'];
       this.peliservice.buscarPelicula(this.texto)
       .subscribe( peliculas => {
       // this.pelicula = pelicula;
         this.pelicula = peliculas['results'];
       });
     });

 }

}
