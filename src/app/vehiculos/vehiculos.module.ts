import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalBusComponent } from './principal-bus/principal-bus.component';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from './services/vehiculos.service';

@NgModule({
  declarations: [
    PrincipalBusComponent
  ],
  exports: [
    PrincipalBusComponent //Importante agregar esta exportacion
  ],
  imports: [
    CommonModule,
    FormsModule //Importante
  ],
  providers: [
    VehiculosService
  ]
})
export class VehiculosModule { }
