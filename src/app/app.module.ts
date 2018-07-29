import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
// import { JsonpModule } from '@angular/http';
// servicios
import { PeliculasService } from './services/peliculas.service';
import { AppRoutingModule } from './/app-routing.module';
// componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PopularesComponent } from './components/populares/populares.component';
import { ObjetoAArrayPipe } from './pipes/objeto-a-array.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MenusComponent } from './components/menus/menus.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PopularesComponent,
    ObjetoAArrayPipe,
    TarjetasComponent,
    PeliculaComponent,
    ResultadoBusquedaComponent,
    SlideshowComponent,
    CategoriasComponent,
    MenusComponent,
    ImagenPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // JsonpModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
