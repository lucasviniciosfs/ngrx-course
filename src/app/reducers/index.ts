import { isDevMode } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export const appStateFeatureKey = 'appState';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("state before ", state)
    console.log("action", action)

    return reducer(state, action)
  }
}


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [logger] : [];
