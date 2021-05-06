import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.scss']
})
export class ComidasComponent implements OnInit {

  public titulo: string = "Comidas"
  public idxComidaFav: number = 0;
  public comidas: string[] = ['Canelones', 'Asado', 'Pollo', 'Estofado', 'Pastel de Papa'];

  constructor() { }

  ngOnInit(): void {
  }
}
