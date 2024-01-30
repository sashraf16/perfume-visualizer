import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Materials } from '../models/materials';

@Injectable({
  providedIn: 'root'
})
export class VisualizerService {

  constructor() { }

  getAll(): Observable<Materials> {
    const base: Materials = { 
      BaseMaterials: ['base1', 'base2', 'base3'], 
      MidMaterials: ['mid1', 'mid2', 'mid3'],
      ToneMaterials: ['tone1', 'tone2', 'tone3'] };
    return of(base).pipe(delay(2000));
  }
}
