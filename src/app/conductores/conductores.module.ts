import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalConductorComponent } from './principal-conductor/principal-conductor.component';
import { FormsModule } from '@angular/forms';
import { PrincipalTripulacionComponent } from './principal-tripulacion/principal-tripulacion.component';

@NgModule({
  declarations: [
    PrincipalConductorComponent,
    PrincipalTripulacionComponent
  ],
  exports: [
    PrincipalConductorComponent, //Importante agregar esta exportacion
    PrincipalTripulacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule  //Importante agregar esta importacion
  ]
})
export class ConductoresModule { }
