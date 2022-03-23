import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>Hola mundo,2</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  variable = 'Hola variable';
  numero: number = 10;
  base: number = 5;

  calcular(num: number){
    this.numero += num;
  }

}
