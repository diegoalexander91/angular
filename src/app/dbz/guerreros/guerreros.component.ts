import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-guerreros',
  templateUrl: './guerreros.component.html',
})
export class GuerrerosComponent {


  //@Input() listarguerreros: Personaje [] = [];
  get listarguerreros(){
    return this.servicioDBZ.guerreros;
  }

  constructor( private servicioDBZ: dbzService ){}

}
