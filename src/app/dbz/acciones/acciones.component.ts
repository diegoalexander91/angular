import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',

})
export class AccionesComponent {

  nuevo: Personaje = {
    nombre: "Digite personaje",
    poder: 10
  }

  // @Output() //Este es un evento personalizado que para el caso emite al padre un personaje
  // onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private Servicio1: dbzService) { }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    else if (this.nuevo.nombre == "Digite personaje") {
      return;
    }
    this.Servicio1.crearGuerrero(this.nuevo);
    // this.onNewPersonaje.emit( this.nuevo ); // En este paso emite el nuevo personaje recibido al arreglo y se imprime.
  }
}
