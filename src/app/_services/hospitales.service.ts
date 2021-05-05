import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../_models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {
  private hospitales: Hospital[] = [new Hospital(1, "Montevideo"), new Hospital(2, "Maldonado"), new Hospital(3, "San Jose")]
  constructor() { }


//getAll

  public getAll(): Observable<Hospital[]> {
    return new  Observable<Hospital[]>(observer => {
      setTimeout(() => {
        observer.next(this.hospitales)
      }, 500)
    })
    
  }
}
