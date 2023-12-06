import { createSelector, MemoizedSelector } from "@ngrx/store";
import { MyFeatureStoreSelectors } from "./my-feature-store";
import { UserStoreSelectors } from "./user-store";


export const selectError = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureError,
  UserStoreSelectors.userError,
  (myFeatureError: any, userError: any) => {
    return myFeatureError || userError
  }
);


export const selectIsLoading = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureIsLoading,
  UserStoreSelectors.userIsLoading,
  (myFeatureIsLoading: boolean, userIsLoading: boolean) => {
    return myFeatureIsLoading || userIsLoading;
  }
);
