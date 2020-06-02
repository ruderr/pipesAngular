import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesDemo';
  
  informacion: any = [{ codigo: 1, nombre: "Pepe", apellido: "Pluma", sueldo: 1500, texto: "Angular es uno de los frameworks de código abierto líderes en el mercado para el desarrollo de aplicaciones, tanto web como móvil." },{ codigo: 1, nombre: "Rama", apellido: "Corta", sueldo: 1100, texto: "Angular es uno de los frameworks de código abierto líderes en el mercado para el desarrollo de aplicaciones, tanto web como móvil." }, { codigo: 1, nombre: "Cueva", apellido: "Profunda", sueldo: 500, texto: "Angular es uno de los frameworks de código abierto líderes en el mercado para el desarrollo de aplicaciones, tanto web como móvil." }];
}
