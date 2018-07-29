import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {
  @Input() items: any[] = []; // Asi declaro lo que se va a recibir como parametro
  urlImagen = 'image.tmdb.org/t/p/w300';

  constructor(private router: Router) {

   }


  verPelicula(id: any) {

    console.log(id);

    this.router.navigate(['/pelicula', id]);

  }
}
