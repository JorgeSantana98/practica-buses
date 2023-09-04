import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalConductorComponent } from './principal-conductor/principal-conductor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalConductorComponent
  ],
  exports: [
    PrincipalConductorComponent //Importante agregar esta exportacion
  ],
  imports: [
    CommonModule,
    FormsModule  //Importante agregar esta importacion
  ]
})
export class ConductoresModule { }
