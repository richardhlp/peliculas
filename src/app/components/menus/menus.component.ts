import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styles: []
})
export class MenusComponent implements OnInit {
  categoriaBuscar = '';
  constructor(private router: Router, private pelisService: PeliculasService) { }

  ngOnInit() {
  }
  buscarCategoria(categoria: string) {
    this.categoriaBuscar = categoria;
    this.pelisService.getCategoria(categoria);
    this.router.navigate(['/categorias', categoria]);

  }
}
