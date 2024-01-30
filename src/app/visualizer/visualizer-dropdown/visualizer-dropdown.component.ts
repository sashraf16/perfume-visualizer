import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as actions from '../store/actions';
import { Observable } from 'rxjs';
import { allMaterialsSelector, baseMaterialsSelector } from '../store/selectors';
import { AppState } from '../../models/app-state';
import { Materials } from '../../models/materials';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'visualizer-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualizer-dropdown.component.html',
  styleUrl: './visualizer-dropdown.component.css'
})
export class VisualizerDropdownComponent implements OnInit{

  baseMats$: Observable<Materials>

  constructor(private store: Store<AppState>) {
    this.baseMats$ = this.store.pipe(select(allMaterialsSelector));
  }

  ngOnInit(): void {
    // this.store.dispatch(actions.getMaterials());
  }
}
