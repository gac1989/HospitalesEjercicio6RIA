import { Component, inject, OnInit } from '@angular/core';
import { Hospital } from '../_models/hospital';
import { HospitalesService } from '../_services/hospitales.service';

@Component({
  selector: 'app-lista-hospitales',
  templateUrl: './lista-hospitales.component.html',
  styleUrls: ['./lista-hospitales.component.scss']
})
export class ListaHospitalesComponent implements OnInit {

  public lista: Hospital[] = []
  public hospitales: HospitalesService
  
  constructor(public hospitalesService: HospitalesService) {
    this.hospitales = hospitalesService
   }

  ngOnInit(): void {
    this.hospitales.getAll().subscribe(
      (hospitales) => this.lista = hospitales,
      (error) => console.error(error)
    )

  }

}
