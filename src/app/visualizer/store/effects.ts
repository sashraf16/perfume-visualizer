import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './actions';
import { VisualizerService } from '../visualizer.service';
import { mergeMap, map, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class vizEffects {
    constructor(private actions$: Actions, private vizService: VisualizerService) {}

    getMaterials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getMaterials),
      mergeMap(() => {
        return this.vizService.getAll().pipe(
          map((materials) => actions.getMaterialsSuccess({ materials })),
          catchError((error) =>
            of(actions.getMaterialsFailure({ error: error.message }))
          )
        );
      })
    )
  );

}