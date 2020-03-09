import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    SlidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };

  slides = [{
    title: "Escucha tu musica",
    subtitle: "EN CUALQUIER LUGAR",
    description:'Los mejores albumes, las mejores canciones. Escuchalas en cualquier momento, a toda hora.',
    icon: "play"
    },
    {
      title: "Disfruta de nuestro reproductor",
    subtitle: "DE VIDEOS INCREIBLES",
    description:'Entra al modo video de nuestro reproductor y obten documentales y making offs increibles de tu artista favorito.',
    icon: "videocam"
    },
    {
      title: "Accede al exclusivo",
    subtitle: "MODO DEPORTE",
    description:"Crea una playlist basada en tu actividad fisica. Ten reportes y acceso a lo que necesites",
    icon: "bicycle"
    }
    ];


  constructor(private router: Router, private storage: Storage) { }
  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}
