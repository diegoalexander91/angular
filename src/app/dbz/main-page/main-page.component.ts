import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {


  // guerreros: Personaje[] = [{nombre: "Diego", poder: 1}];

  //get guerrerosq() : Personaje {
  //return this.guerreros;
  //}

  /*
  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  get guerreros(): Personaje[] {
      return this.Servicio1.guerreros;
    }
     */ // Junto a la instancia del servicio esto traía los datos de los personajes.


  // agregarNuevoGuerrero(arg: Personaje) {
  //   console.log(arg);
  //   this.guerreros.push(arg);
  // }

  constructor(/*private Servicio1: dbzService // Esto permitía usar el servicio como una instancia */) {
    //this.guerreros = this.Servicio1.guerreros; // Está línea es lo que trae a los guerreros a la pantalla desde servicios
  }


}
