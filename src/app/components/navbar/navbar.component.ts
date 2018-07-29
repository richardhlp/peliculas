import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  categoriaBuscar = '';
  constructor(private router: Router, private pelisService: PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula(texto: string) {
    this.router.navigate(['/resultado-busqueda', texto]);
  }

  buscarCategoria(categoria: string) {
    this.categoriaBuscar = categoria;
    console.log(categoria);
    this.pelisService.getCategoria(categoria);
    this.router.navigate(['/categorias', categoria]);

  }

}
