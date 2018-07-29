import { Injectable } from '@angular/core';
// import { Jsonp } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class PeliculasService {

  apiKey = '649d9d7a7ea39009b6a5fb6c2e069716';
  urlMoviedb = 'https://api.themoviedb.org/3';
  /* urlImagen = 'image.tmdb.org/t/p'; */

  constructor(private http: HttpClient,
              private router: Router) { }

  getPopulares() {
    // const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JASONP_CALLBACK`;
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    // return this.http.get(url).pipe(map(res => {
    return this.http.get(url).pipe(map(res => res));

  }

  getCategoria(categoria: string) {
    const fechaHasta = new Date();
    let fechadesde = new Date();
    fechadesde = this.sumarDias(fechadesde, -30);
    const fechad = this.formatDate(fechadesde);
    const fechah = this.formatDate(fechaHasta);

    let url = '';


    if (categoria === 'cartelera') {
      console.log(categoria + ' CATEGORIA PARAMETRO EN SERVICIO');

      url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${fechad}&primary_release_date.lte=${fechah}
      &api_key=${this.apiKey}&language=es`;

    } else if (categoria === 'infantiles') {
      url = `${this.urlMoviedb}/discover/movie?with_genres=16&sort_by=primary_release_date.desc
      &primary_release_year>=2008&api_key=${this.apiKey}&language=es`;

    } else if (categoria === 'drama') {
      url = `${this.urlMoviedb}/discover/movie?with_genres=18&sort_by=popularity.desc
      &api_key=${this.apiKey}&language=es`;

    } else if (categoria === 'ficcion') {
      url = `${this.urlMoviedb}/discover/movie?with_genres=878&sort_by=popularity.desc
      &api_key=${this.apiKey}&language=es`;

    } else if (categoria === 'terror') {
      url = `${this.urlMoviedb}/discover/movie?with_genres=27&sort_by=primary_release_date.desc
      &api_key=${this.apiKey}&language=es`;

    } else if (categoria === 'accion') {
      url = `${this.urlMoviedb}/discover/movie?with_genres=28&sort_by=popularity.desc
      &api_key=${this.apiKey}&language=es`;

    } else if (categoria === 'comedia') {
      url = `${this.urlMoviedb}/discover/movie?with_genres=35&sort_by=popularity.desc
      &api_key=${this.apiKey}&language=es`;

    }
    // return this.http.get(url).pipe(map(res => {
    return this.http.get(url).pipe(map(res => res));


  }



  getPelicula(id: any) {

    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map(res => res)
    );
  }


  buscarPelicula( texto: string ) {

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.http.get( url ).pipe(map( res => res));

}
sumarDias(fecha, dias) {
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}
 formatDate(date) {
  const d = new Date(date);
    let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) {month = '0' + month; }
  if (day.length < 2) { day = '0' + day; }

  return [year, month, day].join('-');
}

}
