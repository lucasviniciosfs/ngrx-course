import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureKey, AuthState } from "./reducers";

export const selectorStateAuth = createFeatureSelector<AuthState>(authFeatureKey)

 export const isLoggedIn = createSelector(
    selectorStateAuth,
    (auth) => !!auth.user
 )

 export const isLoggedOut = createSelector(
    isLoggedIn,
    (loggedIn) => !loggedIn
 )