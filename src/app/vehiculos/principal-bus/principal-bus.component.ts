import { Component } from '@angular/core';
import { Bus } from "../Entidades/bus";
@Component({
  selector: 'app-principal-bus',
  templateUrl: './principal-bus.component.html',
  styleUrls: ['./principal-bus.component.css']
})
export class PrincipalBusComponent {
  ListaBuses: Bus[] = [
    {
      IdCodigo: 0,
      IdTripulacion:1,
      Placa: 'MM0',
      Tipo: 'bus',
      Mantenimiento: true,
      Ocupado: false
    },
    {
      IdCodigo: 1,
      IdTripulacion:2,
      Placa: 'MM1',
      Tipo: 'bus',
      Mantenimiento: false,
      Ocupado: true
    },
    {
      IdCodigo: 2,
      IdTripulacion:3,
      Placa: 'MM2',
      Tipo: 'bus',
      Mantenimiento: false,
      Ocupado: false
    },
    {
      IdCodigo: 3,
      IdTripulacion:4,
      Placa: 'MM3',
      Tipo: 'bus',
      Mantenimiento: false,
      Ocupado: false
    }
  ];
  Nuevo: Bus = new Bus(0,0, "", "",false,false);

  addOrEdit() {

    if (this.Nuevo.IdCodigo === 0) {
      this.Nuevo.IdCodigo = this.ListaBuses.length + 1;
      this.ListaBuses.push(this.Nuevo);
    }
    this.Nuevo = new Bus(0,0, "", "",false,false);
  }
  openForEdit(obj: Bus) {
    this.Nuevo = obj;
  }

  Delete(){
    this.ListaBuses = this.ListaBuses.filter(x => x != this.Nuevo);
    this.Nuevo = new Bus(0,0, "", "",false,false);
  }
  get getListaBuses(): Bus[] {
    return [...this.ListaBuses];
  }
}
