import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
// el activatedroute es para leer la url
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/peliculaInterfaz';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any = {};


id = '';
  constructor(private peliservice: PeliculasService,
              activatedRoute: ActivatedRoute) {
                activatedRoute.params.subscribe( parametros => {
                 /*  console.log(parametros); */
                  this.id = parametros['id'];
                  this.peliservice.getPelicula(this.id)
                  .subscribe( pelicula => {
                  // this.pelicula = pelicula;
                   console.log(pelicula);
                    this.pelicula = pelicula;
                  });
                });

               }

  ngOnInit() {
  }

}
