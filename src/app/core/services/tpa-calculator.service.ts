import { BaseService } from './../utility/base-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeightType } from '../models/weight';

@Injectable({
   providedIn: 'root',
})
export class TpaCalculatorService extends BaseService {
   readonly DOSE = 0.9;
   readonly WASTE_MEASURE = 100;
   readonly BOLUS_PERCENTILE = 0.1;
   readonly LBS_TO_KGS = 2.205;
   readonly MAX_KGS = 99.32;
   readonly MAX_LBS = 219;

   totalDose$: Observable<string>;
   waste$: Observable<string>;
   bolus$: Observable<string>;
   infusion$: Observable<string>;

   private _totalDose$ = new BehaviorSubject<string>('0');
   private _waste$ = new BehaviorSubject<string>('0');
   private _bolus$ = new BehaviorSubject<string>('0');
   private _infusion$ = new BehaviorSubject<string>('0');

   constructor() {
      super();

      this.totalDose$ = this._totalDose$.asObservable();
      this.waste$ = this._waste$.asObservable();
      this.bolus$ = this._bolus$.asObservable();
      this.infusion$ = this._infusion$.asObservable();

      this.onDestroy$.subscribe(() => {
         this._totalDose$.complete();
         this._waste$.complete();
         this._bolus$.complete();
         this._infusion$.complete();
      });
   }

   max() {
      this._totalDose$.next('90');
      this._waste$.next('10');
      this._bolus$.next('9');
      this._infusion$.next('81');
   }

   getWeight(weight: number, unit: WeightType): number {
      let initialWeight = weight;
      if (unit === 'lbs') {
         initialWeight = this.convertFromLbs(initialWeight);
         return initialWeight;
      }

      return initialWeight;
   }

   convertFromLbs(lbs: number): number {
      return lbs / this.LBS_TO_KGS;
   }

   getTpa(kgs: number): void {
      if (kgs > this.MAX_KGS) {
         this.max();
         return;
      }

      const totalDose = kgs * this.DOSE;
      const waste = this.WASTE_MEASURE - totalDose;
      const bolus = totalDose * this.BOLUS_PERCENTILE;
      const infusion = totalDose - bolus;

      this._totalDose$.next(totalDose.toFixed(2));
      this._waste$.next(waste.toFixed(2));
      this._bolus$.next(bolus.toFixed(2));
      this._infusion$.next(infusion.toFixed(2));
   }
}
