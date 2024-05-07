import { Component, OnInit } from '@angular/core';
import { VisualizerDropdownComponent } from '../visualizer-dropdown/visualizer-dropdown.component';
import { VisualizerDisplayComponent } from '../visualizer-display/visualizer-display.component';
import { Store, select } from '@ngrx/store';
import * as actions from '../store/actions';
import * as selectors from '../store/selectors';
import { AppState } from '../../models/app-state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Materials } from '../../models/materials';

@Component({
  selector: 'visualizer-home',
  standalone: true,
  imports: [VisualizerDropdownComponent, VisualizerDisplayComponent, CommonModule],
  templateUrl: './visualizer-home.component.html',
  styleUrl: './visualizer-home.component.css'
})
export class VisualizerHomeComponent implements OnInit{

  isLoading$?: Observable<boolean>;
  test?: Observable<Materials>;
  test2: any;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(actions.getMaterials());
        this.isLoading$ = this.store.pipe(select(selectors.isLoadingSelector));
    // this.test = this.store.pipe(select(selectors.allMaterialsSelector));
    // this.test2 = this.store.select((store) => store.MaterialsState.Materials);
    // this.store.select(selectors.allMaterialsSelector).subscribe(x => {
    //   this.test2 = x;
    //   console.log(this.test2);
    //   console.log('hi');
    // })
  }
}
