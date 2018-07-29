import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
categoriaBuscar = '';
  constructor(private router: Router, private pelisService: PeliculasService) {
   }

  ngOnInit() {
  }

/*   buscarCategoria(categoria: string) {
    this.categoriaBuscar = categoria;
    this.pelisService.getCategoria(categoria);
    this.router.navigate(['/categorias', categoria]);

  } */
}
