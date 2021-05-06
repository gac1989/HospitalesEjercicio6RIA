import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidasComponent } from './comidas/comidas.component';
import { Comidas2Component } from './comidas2/comidas2.component';
import { EjemplosInputComponent } from './ejemplos-input/ejemplos-input.component';
import { GatosComponent } from './gatos/gatos.component';
import { NuevaComidaComponent } from './nueva-comida/nueva-comida.component';
import { PerrosComponent } from './perros/perros.component';

const routes: Routes = [
  {
    path: 'gatos', component: GatosComponent
  },
  {
    path: 'perros', component: PerrosComponent
  },
  {
    path: 'comidas', component: ComidasComponent
  },
  {
    path: 'comidas2', component: Comidas2Component
  },
  {
    path: 'ejemplosInput', component: EjemplosInputComponent
  },
  {
    path: 'nuevacomida', component: NuevaComidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
