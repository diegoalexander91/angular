import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent{

    nombre:string = "ironman";
    edad:number = 45;

    get nombreMayus():string {
        return this.nombre.toUpperCase();
    }

    traerEdad():string{
        return this.nombre + " - " + this.edad.toString();
    }

    cambiarNombre():void{
        this.nombre = "spiderman";
    }

    
    cambiarEdad():void {
        this.edad = 30;
    }
}

