import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state"
import * as fromUser from './reducer';
import { User } from "src/app/models/user";

export const selectUser  = createFeatureSelector<State>('user');

export const selectCurrentUser = createSelector(
  selectUser,
  fromUser.selectUser
);

export const getLoggedIn = createSelector(
  selectUser,
  fromUser.getLoggedIn
);

export const userError = createSelector(
  selectUser,
  fromUser.getError
);

export const userHasError = createSelector(
  selectUser,
  fromUser.hasError
);

export const userIsLoading = createSelector(
  selectUser,
  fromUser.isLoading
);

