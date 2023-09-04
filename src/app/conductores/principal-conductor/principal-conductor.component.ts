import { Component } from '@angular/core';
import { Chofer } from "../entidades/chofer";
@Component({
  selector: 'app-principal-conductor',
  templateUrl: './principal-conductor.component.html',
  styleUrls: ['./principal-conductor.component.css']
})
export class PrincipalConductorComponent {
  ListaConductores: Chofer[] = [
    {
      IdCodigo: 0,
      Cedula: '0705546587',
      Nombre: 'Alex',
      Apellidos: 'Zambrano',
      Sexo: 'M',
      FechaNacimiento: '28/03/1998',
      Experiencia: 3
    },
    {
      IdCodigo: 1,
      Cedula: '0705548963',
      Nombre: 'Erick',
      Apellidos: 'Zambrano',
      Sexo: 'M',
      FechaNacimiento: '03/09/1997',
      Experiencia: 4
    },
    {
      IdCodigo: 2,
      Cedula: '0715548985',
      Nombre: 'Luisa',
      Apellidos: 'Delgadillo',
      Sexo: 'F',
      FechaNacimiento: '04/10/1992',
      Experiencia: 1
    }
  ];
  Nuevo: Chofer = new Chofer(0, "", "", "", "", "", 0);

  addOrEdit() {

    if (this.Nuevo.IdCodigo === 0) {
      this.Nuevo.IdCodigo = this.ListaConductores.length + 1;
      this.ListaConductores.push(this.Nuevo);
    }
    this.Nuevo = new Chofer(0, "", "", "", "", "", 0);
  }
  openForEdit(obj: Chofer) {
    this.Nuevo = obj;
  }

  Delete(){
    this.ListaConductores = this.ListaConductores.filter(x => x != this.Nuevo);
    this.Nuevo = new Chofer(0, "", "", "", "", "", 0);
  }
}
