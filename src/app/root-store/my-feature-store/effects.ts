import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, of as observableOf, startWith, switchMap  } from "rxjs";
import { DataService } from "src/app/services/data.service";
import * as featureActions from './actions';

@Injectable()
export class MyFeatureStoreEffects {

  constructor(private dataService: DataService, private actions$: Actions) {

  }


  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(featureActions.ActionTypes.LOAD_REQUEST),
    startWith(new featureActions.LoadRequestAction()),
    switchMap( action =>
      this.dataService
            .getItems()
            .pipe(
              map(
                items => new featureActions.LoadSuccessAction({items})
              ),
              catchError(error => observableOf(new featureActions.LoadFailureAction({error})))
            )

    )
  )
}
