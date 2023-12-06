import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  login(userName: string, password: string) : Observable<User> {
    return of({userName: userName, password: password});
  }

  getItems() : Observable<any[]> {
    return of([1]);
  }

  constructor() { }
}
