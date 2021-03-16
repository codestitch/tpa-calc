import { Injectable, OnDestroy } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';

@Injectable()
export class BaseService implements OnDestroy {
  onDestroy$: Observable<void>;

  private _onDestroy$: AsyncSubject<void> = new AsyncSubject<void>();

  constructor() {
    this.onDestroy$ = this._onDestroy$.asObservable();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
