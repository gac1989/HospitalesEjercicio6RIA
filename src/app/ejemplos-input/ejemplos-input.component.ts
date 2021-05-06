import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-input',
  templateUrl: './ejemplos-input.component.html',
  styleUrls: ['./ejemplos-input.component.scss']
})
export class EjemplosInputComponent implements OnInit {


  public values: string | undefined; 

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }
}
