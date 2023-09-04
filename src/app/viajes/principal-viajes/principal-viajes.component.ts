import { Component, AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import { Viaje } from '../Entidades/viaje';
import { Bus } from '../../vehiculos/Entidades/bus';
import { PrincipalBusComponent } from 'src/app/vehiculos/principal-bus/principal-bus.component';
import { VehiculosService } from 'src/app/vehiculos/services/vehiculos.service';

@Component({
  selector: 'app-principal-viajes',
  templateUrl: './principal-viajes.component.html',
  styleUrls: ['./principal-viajes.component.css']
})
export class PrincipalViajesComponent {
  @ViewChild('miH6') miH6: ElementRef| undefined;
  contenidoH6: number = 0; 
 

  ngAfterViewInit() {
    if (this.miH6) {
      // Obtener el contenido del <h6>
      this.contenidoH6 = this.miH6.nativeElement.textContent;
    }
  }
  ListaViajes: Viaje[] = [
    {
      IdCodigo: 0,
      Codigo: 'IV-001',
      Tripulacion: 1,
      Bus: 1,
      Origen: 'Ecuador',
      Destino: 'Colombia',
      FechaHora:'2023-08-31 23:59:59'
    },
    {
      IdCodigo: 1,
      Codigo: 'IV-002',
      Tripulacion: 1,
      Bus: 2,
      Origen: 'Ecuador',
      Destino: 'Colombia',
      FechaHora: '2023-08-31 23:59:59'
    },
    {
      IdCodigo: 2,
      Codigo: 'IV-003',
      Tripulacion: 1,
      Bus: 1,
      Origen: 'Ecuador',
      Destino: 'Colombia',
      FechaHora: '2023-08-31 23:59:59'
    }
  ];
  vehiculoSeleccionado: Bus | undefined;

  Nuevo: Viaje = new Viaje(0, "", 0, 0, "", "","" );

  addOrEdit() {
    var Idcodigo:string;
    if (this.Nuevo.IdCodigo === 0) {
      this.Nuevo.IdCodigo = this.ListaViajes.length + 1;
      this.Nuevo.Codigo = "IV-00"+(this.ListaViajes.length + 1);
      this.ListaViajes.push(this.Nuevo);
    }
    this.Nuevo = new Viaje(0, "", 0, 0, "", "","" );
  }
  openForEdit(obj: Viaje) {
    this.Nuevo = obj;
  }

  Delete() {
    this.ListaViajes = this.ListaViajes.filter(x => x != this.Nuevo);
    this.Nuevo = new Viaje(0, "", 0, 0, "", "","" );
  }

  get ListaBuses() {
    return this.obs.getListaBuses;

  }

  constructor(private obs:VehiculosService)
  {

  }
  
}
