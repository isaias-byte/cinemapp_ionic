import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peliculas=[]; /*[
    {
      titulo: "Hoovey",
      anio: 2015,
      director: "Sean McNamura",
      imagen: "https://i.pinimg.com/originals/17/03/cf/1703cf4ac926063dc5713c957a537f5b.jpg"
    },
    {
      titulo: "28 Days Later",
      anio: 2003,
      director: "Danny Boyle",
      imagen: "https://m.media-amazon.com/images/M/MV5BYTFkM2ViMmQtZmI5NS00MjQ2LWEyN2EtMTI1ZmNlZDU3MTZjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    }
  ];*/

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas=>{
      this.peliculas=peliculas;
    });
    //this.peliculasService.getPeliculas();
  }

}
