import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { MyModel } from "src/app/models/my-model";

export const featureAdapter: EntityAdapter<MyModel> = createEntityAdapter<MyModel>({
  selectId: model => model.id,
  sortComparer: (a: MyModel, b: MyModel): number =>
      b.someData.toString().localeCompare(a.someData.toString())
});

export interface State extends EntityState<MyModel> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
