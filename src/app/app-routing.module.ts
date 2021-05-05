import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHospitalesComponent } from './lista-hospitales/lista-hospitales.component';
import { HospitalesService } from './_services/hospitales.service';

const routes: Routes = [
  {path: "hospitales", component: ListaHospitalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HospitalesService]
})
export class AppRoutingModule { }
