import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagenEnviada: any): any {
    console.log(imagenEnviada + 'IMAGEN ENVIADA');
    const url = 'http://image.tmdb.org/t/p/w400/';
    if (imagenEnviada !== null) {
      return url + imagenEnviada;

    } else {

        return 'assets/img/sinImagen.png';

    }

  }

}
