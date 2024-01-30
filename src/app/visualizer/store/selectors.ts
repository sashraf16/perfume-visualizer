import { createSelector } from "@ngrx/store";
import { AppState } from "../../models/app-state";

export const selectFeature = (state: AppState) => state.MaterialsState;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
)

export const allMaterialsSelector = createSelector(
    selectFeature,
    (state) => state.Materials
)

export const baseMaterialsSelector = createSelector(
    selectFeature,
    (state) => state.Materials.BaseMaterials
)

export const midMaterialsSelector = createSelector(
    selectFeature,
    (state) => state.Materials.MidMaterials
)

export const tone1MaterialsSelector = createSelector(
    selectFeature,
    (state) => state.Materials.ToneMaterials
)