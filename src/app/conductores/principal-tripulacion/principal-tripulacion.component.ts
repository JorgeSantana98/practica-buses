import { Component } from '@angular/core';
import { Tripulacion } from "../entidades/tripulacion";

@Component({
  selector: 'app-principal-tripulacion',
  templateUrl: './principal-tripulacion.component.html',
  styleUrls: ['./principal-tripulacion.component.css']
})
export class PrincipalTripulacionComponent {
  ListaConductores: Tripulacion[] = [
    {
      IdCodigo: 1,
      IdChofer1: "1",
      IdChofer2: "2",
      IdChofer3: "3",
    },
    {
      IdCodigo: 2,
      IdChofer1: "4",
      IdChofer2: "5",
      IdChofer3: "",
    },
    {
      IdCodigo: 3,
      IdChofer1: "6",
      IdChofer2: "7",
      IdChofer3: "0",
    }
  ];
  Nuevo: Tripulacion = new Tripulacion(0, "" , "", "");

  addOrEdit() {

    if (this.Nuevo.IdCodigo === 0) {
      this.Nuevo.IdCodigo = this.ListaConductores.length + 1;
      this.ListaConductores.push(this.Nuevo);
    }
    this.Nuevo = new Tripulacion(0, "" , "", "");
    // this.Nuevo = new Tripulacion(0, 0 , 0, 0, 0);
  }
  openForEdit(obj: Tripulacion) {
    this.Nuevo = obj;
  }

  Delete(){
    this.ListaConductores = this.ListaConductores.filter(x => x != this.Nuevo);
    this.Nuevo = new Tripulacion(0, "" , "", "");
  }
}
