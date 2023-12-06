import { Action } from "@ngrx/store";
import { MyModel } from "src/app/models/my-model";

export enum ActionTypes {
  LOAD_REQUEST = '[My Feature] load Request',
  LOAD_FAILURE = '[My Feature] load Failure',
  LOAD_SUCCESS = '[My Feature] load Success'
}

export class LoadRequestAction implements  Action{
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {

  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string}) {

  }
}

export class LoadSuccessAction implements Action {

  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: MyModel[]}) {
  }
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;

