import { createAction, props } from "@ngrx/store";
import { Materials } from "../../models/materials";

export const getMaterials = createAction(
    '[NameSpace] getMaterials'
);

export const getMaterialsSuccess = createAction(
    '[NameSpace] get materials success',
    props<{ materials: Materials }>()
);

export const getMaterialsFailure = createAction(
    '[NameSpace] getMaterials',
    props<{ error: string }>()
);