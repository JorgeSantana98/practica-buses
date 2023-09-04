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
    },
    {
      IdCodigo: 3,
      Cedula: '07155498547',
      Nombre: 'Gerardo',
      Apellidos: 'Quiros',
      Sexo: 'M',
      FechaNacimiento: '04/10/1997',
      Experiencia: 2
    },
    {
      IdCodigo: 4,
      Cedula: '07155498562',
      Nombre: 'Marcelino ',
      Apellidos: 'Becerra',
      Sexo: 'M',
      FechaNacimiento: '04/10/1996',
      Experiencia: 3
    },
    {
      IdCodigo: 5,
      Cedula: '07155494712',
      Nombre: 'Leandro',
      Apellidos: 'Zurita',
      Sexo: 'M',
      FechaNacimiento: '04/10/1994',
      Experiencia: 4
    },
    {
      IdCodigo: 6,
      Cedula: '07155494512',
      Nombre: 'Luis',
      Apellidos: 'Roman',
      Sexo: 'M',
      FechaNacimiento: '04/10/1995',
      Experiencia: 4
    },
    {
      IdCodigo: 7,
      Cedula: '07055492893',
      Nombre: 'Bruno ',
      Apellidos: 'Fonseca',
      Sexo: 'M',
      FechaNacimiento: '04/10/1997',
      Experiencia: 3
    },
    {
      IdCodigo: 8,
      Cedula: '07155498547',
      Nombre: 'Jacobo',
      Apellidos: 'Sanchis',
      Sexo: 'M',
      FechaNacimiento: '04/10/1997',
      Experiencia: 2
    },
    {
      IdCodigo: 9,
      Cedula: '07155494523',
      Nombre: 'Alex',
      Apellidos: 'Guijarro',
      Sexo: 'M',
      FechaNacimiento: '04/10/1998',
      Experiencia: 2
    },
    {
      IdCodigo: 10,
      Cedula: '07155499852',
      Nombre: 'Francisco',
      Apellidos: 'Borja',
      Sexo: 'M',
      FechaNacimiento: '04/10/1997',
      Experiencia: 2
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
