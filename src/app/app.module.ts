import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerrosComponent } from './perros/perros.component';
import { GatosComponent } from './gatos/gatos.component';
import { ComidasComponent } from './comidas/comidas.component';
import { Comidas2Component } from './comidas2/comidas2.component';
import { ComidaComponent } from './comida/comida.component';
import { EjemplosInputComponent } from './ejemplos-input/ejemplos-input.component';
import { NuevaComidaComponent } from './nueva-comida/nueva-comida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaComida2Component } from './nueva-comida2/nueva-comida2.component';

@NgModule({
  declarations: [
    AppComponent,
    PerrosComponent,
    GatosComponent,
    ComidasComponent,
    Comidas2Component,
    ComidaComponent,
    EjemplosInputComponent,
    NuevaComidaComponent,
    NuevaComida2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
