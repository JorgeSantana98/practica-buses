import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConductoresModule } from './conductores/conductores.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { ViajesModule } from './viajes/viajes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConductoresModule,  //Importante agregar esta importacion
    VehiculosModule,
    ViajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
