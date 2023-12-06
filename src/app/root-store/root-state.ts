import { MyFeatureStoreState } from "./my-feature-store";
import { UserStoreState } from "./user-store";

export interface State {
  myFeature: MyFeatureStoreState.State;
  userState: UserStoreState.State
}
