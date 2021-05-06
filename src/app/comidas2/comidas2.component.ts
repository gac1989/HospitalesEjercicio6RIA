import { Component, OnInit } from '@angular/core';
import { Comida } from '../_models/comida';
import { ComidasService } from '../_services/comidas.service';

@Component({
  selector: 'app-comidas2',
  templateUrl: './comidas2.component.html',
  styleUrls: ['./comidas2.component.scss']
})
export class Comidas2Component implements OnInit {

  public titulo: string = "Comidas"
  public idxComidaFav: number = 0;
  public comidas: Comida[] = [];

  constructor(private service: ComidasService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (lista) => {this.comidas = lista},
      (error) => {/* manjear error */}
    )     
  }
}
