import {
   OnDestroy,
   AfterViewChecked,
   AfterContentChecked,
   AfterContentInit,
   OnInit,
   OnChanges,
   AfterViewInit,
   SimpleChanges,
   Directive,
} from '@angular/core';
import { Subject, BehaviorSubject, AsyncSubject } from 'rxjs';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export class BaseComponent
   implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {
   onInit$: AsyncSubject<void> = new AsyncSubject<void>();
   onChanges$: BehaviorSubject<SimpleChanges> = new BehaviorSubject<SimpleChanges>(
      {}
   );
   onDestroy$: AsyncSubject<void> = new AsyncSubject<void>();
   onAfterViewInit$: AsyncSubject<void> = new AsyncSubject<void>();
   onAfterContentInit$: AsyncSubject<void> = new AsyncSubject<void>();

   constructor() {}

   ngOnInit(): void {
      this.onInit$.next();
      this.onInit$.complete();
   }
   ngOnChanges(changes: SimpleChanges): void {
      this.onChanges$.next(changes);
   }
   ngOnDestroy(): void {
      this.onChanges$.complete();

      this.onDestroy$.next();
      this.onDestroy$.complete();
   }

   ngAfterViewInit(): void {
      this.onAfterViewInit$.next();
      this.onAfterViewInit$.complete();
   }
   ngAfterContentInit(): void {
      this.onAfterContentInit$.next();
      this.onAfterContentInit$.complete();
   }
}
