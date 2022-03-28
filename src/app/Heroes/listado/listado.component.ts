import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ["Spiderman", "Ironman", "Thor", "Cap", "Hulk"];
  borrado: string = "";


  borrarHeroe(): string {
    this.borrado = this.heroes.shift() || '';

    
    return this.borrado || '';
    

  }
}