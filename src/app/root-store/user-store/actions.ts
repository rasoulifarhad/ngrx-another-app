import { Action } from "@ngrx/store";
import { User } from "src/app/models/user";

export enum ActionTypes {
  LOGIN_REQUEST = '[User] Login Request',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGIN_FAILURE = '[User] Login Failure',
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: User){}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: User){}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: any){}
}

export type Actions = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

