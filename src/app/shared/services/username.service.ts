import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  // userNameSub$ : Subject<string> = new Subject<string>;
  private userNameSub$: Subject<string> = new Subject<string>();
  public userNameSubObs$ : Observable<string> = this.userNameSub$.asObservable()
  constructor() {}

  setUserName(value: string) {
    // as observer .next(data)
    this.userNameSub$.next(value);
  }
}
