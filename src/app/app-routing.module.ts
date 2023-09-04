import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalConductorComponent } from './conductores/principal-conductor/principal-conductor.component';
import { PrincipalBusComponent } from './vehiculos/principal-bus/principal-bus.component';
import { PrincipalViajesComponent } from './viajes/principal-viajes/principal-viajes.component';
import { PrincipalTripulacionComponent } from './conductores/principal-tripulacion/principal-tripulacion.component';

const routes: Routes = [
  { path: 'inicio', component:  NavbarComponent},
  {path : 'chofer', component: PrincipalConductorComponent},
  { path: 'bus', component:  PrincipalBusComponent},
  { path: 'tripulacion', component:  PrincipalTripulacionComponent},
  { path: 'viaje', component: PrincipalViajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
