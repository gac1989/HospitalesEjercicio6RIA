import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comida } from '../_models/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  private comidas: Comida[] = [new Comida(1, 'Canelones'), new Comida(2, 'Pollo al Horno'), new Comida(3, 'Hamburguesas'), new Comida(4, 'Chivito')];
  private ultimoId: number = 4;

  constructor() { }

  public getAll(): Observable<Comida[]> {
    const result = new Observable<Comida[]>(observer => {
      setTimeout(() => {
        observer.next(this.comidas);
      }, 1000);

    });
    return result;
  }

  public addComida(x: Comida): Observable<Comida> {
    const result = new Observable<Comida>(observer => {
      setTimeout(() => {
        this.comidas.push(x);
        observer.next(x);
      }, 1000);

    });
    return result;
  }
}
