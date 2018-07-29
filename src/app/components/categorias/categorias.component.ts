import { Component } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ObjetoAArrayPipe } from '../../pipes/objeto-a-array.pipe';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent {
  pelicula: any = {};
  categoria = '';
  constructor(private peliservice: PeliculasService,
    private router: Router, activatedRoute: ActivatedRoute) {
      activatedRoute.params.subscribe( parametros => {
        console.log(parametros);
         this.categoria = parametros['categoria'];
         this.peliservice.getCategoria(this.categoria)
         .subscribe( peliculas => {
         // this.pelicula = pelicula;
           this.pelicula = peliculas['results'];
         });
       });
     }

/*     Cartelera() {
      this.peliservice.getCartelera().subscribe(data => {
        console.log(data['results']);
        this.pelicula = data['results'];
      });

    } */
}
