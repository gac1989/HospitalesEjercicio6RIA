import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comida } from '../_models/comida';
import { ComidasService } from '../_services/comidas.service';

@Component({
  selector: 'app-nueva-comida',
  templateUrl: './nueva-comida.component.html',
  styleUrls: ['./nueva-comida.component.scss']
})
export class NuevaComidaComponent implements OnInit {

  public comidaForm: FormGroup = new FormGroup({});

  constructor(private service: ComidasService) { }

  ngOnInit(): void {
    this.comidaForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    this.service.addComida(new Comida(this.comidaForm.controls.id.value, this.comidaForm.controls.nombre.value)).subscribe(
      (ok) => {
        alert('Comida Agregada correctamente');
        this.comidaForm.reset();
      },
      (error) => {
        // manejar error.
      }
    );    
  }
}
