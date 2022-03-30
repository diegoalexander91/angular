import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService {

  private _guerreros: Personaje[] = [
    { nombre: "Goku", poder: 15000 },
    { nombre: "Vegeta", poder: 14000}
  ]

  get guerreros(): Personaje[] {
    return this._guerreros;
  }

  constructor() {
    console.log("Servicio iniciado");
  }

  crearGuerrero(guerrero: Personaje){
    this._guerreros.push(guerrero);
  }

}