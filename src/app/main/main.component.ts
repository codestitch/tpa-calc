import { TpaCalculatorService } from './../core/services/tpa-calculator.service';
import { Component } from '@angular/core';
import { LabelValueItem } from '../core/models/label-value-item';
import { WeightType } from '../core/models/weight';
import { NavigationItem } from '../core/components/navigation/models/navigation-item';

@Component({
   selector: 'tpa-main',
   templateUrl: './main.component.html',
   styleUrls: ['./main.component.scss'],
})
export class MainComponent {
   navigationItems: NavigationItem[];
   constructor() {
      this.navigationItems = [{
         name: 'home',
         title: 'Home',
         path: '',
         icon: null
      }, {
         name: 'bolus-time',
         title: 'Bolus Time',
         path: 'bolus-time',
         icon: null
      }]
   }
}
