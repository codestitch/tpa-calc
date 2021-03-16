import { TpaCalculatorService } from './../core/services/tpa-calculator.service';
import { Component } from '@angular/core';
import { PwaService } from '../core/services/pwa.service';

@Component({
   selector: 'tpa-main',
   templateUrl: './main.component.html',
   styleUrls: ['./main.component.scss'],
})
export class MainComponent {
   weight = null;
   readonly MAX_WEIGHT = 500;

   constructor(public service: TpaCalculatorService) {}

   onChange(value) {
      console.log('onChange', value);
      const weight = value > this.MAX_WEIGHT ? 0 : value;

      if (value > this.MAX_WEIGHT || value === 0 || !value) {
         this.service.reset();
         return;
      }

      this.service.getTpa(weight);
   }
}
