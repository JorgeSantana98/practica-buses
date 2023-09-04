import { Injectable } from '@angular/core';
import { Bus } from "../Entidades/bus";
@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private ListaBuses: Bus[] = [
    {
      IdCodigo: 0,
      IdTripulacion: 1,
      Placa: 'MM0',
      Tipo: 'bus',
      Mantenimiento: true,
      Ocupado: false
    },
    {
      IdCodigo: 1,
      IdTripulacion: 2,
      Placa: 'MM0',
      Tipo: 'bus',
      Mantenimiento: false,
      Ocupado: true
    },
    {
      IdCodigo: 2,
      IdTripulacion: 3,
      Placa: 'MM0',
      Tipo: 'bus',
      Mantenimiento: false,
      Ocupado: false
    }
  ];
  constructor() { }
  get getListaBuses(): Bus[] {
    return [...this.ListaBuses];
  }
}
