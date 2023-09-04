import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalViajesComponent } from './principal-viajes/principal-viajes.component';
import { FormsModule } from '@angular/forms';
import { PrincipalBusComponent } from '../vehiculos/principal-bus/principal-bus.component';

@NgModule({
  declarations: [
    PrincipalViajesComponent
  ],
  exports: [
    PrincipalViajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ViajesModule { }
