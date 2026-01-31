// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchServiceService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private search$ = new BehaviorSubject<string>('');

  setSearch(value: string) {
    this.search$.next(value.toLowerCase());
  }

  getSearch() {
    return this.search$.asObservable();
  }
}
