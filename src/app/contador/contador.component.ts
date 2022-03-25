import { Component } from "@angular/core";
@Component({
    selector: 'app-contador',
    template: `
    <pre>Hola mundo</pre>
    <strong>La base es {{base}}</strong>
    <br>
    <button (click)="calcular(base)">Sumar  {{base}}</button>
    Respuesta: {{numero}}
    <button (click)="calcular(-base)">Restar {{base}}</button>
    <pre>hecho</pre>
    `,

    //styleUrls: ['./app.component.css']
  })
export class contadorComponent{

    title = 'bases';
    variable = 'Hola variable';
    numero: number = 10;
    base: number = 5;
  
    calcular(num: number){
      this.numero += num;
    }

}