import { Component, Input, OnInit } from '@angular/core';
import { Comida } from '../_models/comida';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {

  @Input() public model: Comida | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
