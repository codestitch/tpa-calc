import { TpaCalculatorService } from './../core/services/tpa-calculator.service';
import { Component } from '@angular/core';
import { LabelValueItem } from '../core/models/label-value-item';
import { WeightType } from '../core/models/weight';

@Component({
   selector: 'tpa-main',
   templateUrl: './main.component.html',
   styleUrls: ['./main.component.scss'],
})
export class MainComponent {
   weightList: LabelValueItem<WeightType>[] = [
      { label: 'Kgs', value: 'kgs' },
      { label: 'Lbs', value: 'lbs' },
   ];
   selectedWeight: WeightType = this.weightList[0].value;
   weight = null;
   readonly MAX_WEIGHT = 100;

   constructor(public service: TpaCalculatorService) {}

   onChange(value) {
      const weight = this.service.getWeight(value, this.selectedWeight);
      this.service.getTpa(weight);
   }

   select(item) {
      this.selectedWeight = item;
   }
}
