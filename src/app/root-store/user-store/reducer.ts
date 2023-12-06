import { User } from 'src/app/models/user';
import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';


export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        hasError: false,
        isLoading: true,
        error: null,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        isLoading: false,
        error: null
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        hasError: true,
        isLoading: false,
      };

    default:
      return state;
  }
}

export const getError =  (state: State) : any => state.error;
export const isLoading =  (state: State) : boolean => state.isLoading;
export const selectUser = (state: State) : User | null => state.user;
export const hasError = (state: State) : boolean => state.hasError;
export const getLoggedIn = (state: State) : boolean => state.loggedIn;


