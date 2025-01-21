import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { loginAction } from '../auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

const initialState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialState,
  on(loginAction, (state, action) => {
    return {
      user: action.user
    }
  })
)

