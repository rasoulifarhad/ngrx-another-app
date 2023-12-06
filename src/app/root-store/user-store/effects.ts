import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, switchMap } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import * as userActions from './actions';
import { DataService } from "src/app/services/data.service";

@Injectable()
export class UserEffects {

  constructor(private dataService: DataService, private actions$: Actions) {

  }

  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoginRequestAction>(userActions.ActionTypes.LOGIN_REQUEST),
    switchMap(action =>
      this.dataService
            .login(action.payload.userName, action.payload.password)
            .pipe(
              map(
                user => new userActions.LoginSuccessAction(
                  user
                )
              ),
              catchError(error => of(new userActions.LoginFailureAction(error)))
            )


    )
  );
}
