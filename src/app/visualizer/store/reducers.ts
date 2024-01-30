import { createReducer, on } from '@ngrx/store';
import * as actions from './actions';
import { AppState } from '../../models/app-state';
import { MaterialsState } from '../../models/materialsState';


const initialState: MaterialsState = {
    Materials: {
        BaseMaterials: [],
        MidMaterials: [],
        ToneMaterials: []
    },
    isLoading: false,
    errors: ''
};

export const vizReducer = createReducer(
    initialState,
    on(
        actions.getMaterials,
        (state) => ({
            ...state,
            isLoading: true
        }),
    ),
    on(actions.getMaterialsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        Materials: action.materials,
    })),
    on(actions.getMaterialsFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
);