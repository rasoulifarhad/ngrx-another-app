import { ActionTypes, Actions } from "./actions";
import { State, featureAdapter, initialState } from "./state";

export function featureReducer(state = initialState, action: Actions) : State {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case ActionTypes.LOAD_SUCCESS:
      return featureAdapter.addMany(action.payload.items ,{
        ...state,
        isLoading: false,
        error: null
      });
    default:
      return state;
  }
}
