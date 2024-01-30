import { Materials } from "./materials";

export interface MaterialsState {
    Materials: Materials;
    isLoading: boolean;
    errors: string;
}