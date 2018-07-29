import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objetoAArray',
  pure: false
})
export class ObjetoAArrayPipe implements PipeTransform {

  transform(value: any): any {
    const objetoAArray = [];
    for (let pelicula in value ){
      objetoAArray.push(pelicula);
    }
    return objetoAArray;
  }

}
