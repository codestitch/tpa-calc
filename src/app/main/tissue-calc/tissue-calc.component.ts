import { Component, OnInit } from '@angular/core';
import { LabelValueItem } from 'src/app/core/models/label-value-item';
import { WeightType } from 'src/app/core/models/weight';
import { TpaCalculatorService } from 'src/app/core/services/tpa-calculator.service';

@Component({
   selector: 'tpa-tissue-calc',
   templateUrl: './tissue-calc.component.html',
   styleUrls: ['./tissue-calc.component.scss']
})
export class TissueCalcComponent {
   weightList: LabelValueItem<WeightType>[] = [
      { label: 'Kgs', value: 'kgs' },
      { label: 'Lbs', value: 'lbs' },
   ];
   selectedWeight: WeightType = this.weightList[0].value;

   constructor(public service: TpaCalculatorService) { }

   onChange(value) {
      const weight = this.service.getWeight(value, this.selectedWeight);
      this.service.getTpa(weight);
   }

   select(item) {
      this.selectedWeight = item;
   }

}
