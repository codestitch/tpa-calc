import { BolusTimeService } from './../../core/services/bolus-time.service';
import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
   selector: 'tpa-bolus-time',
   templateUrl: './bolus-time.component.html',
   styleUrls: ['./bolus-time.component.scss'],
   providers: [BolusTimeService]
})
export class BolusTimeComponent {
   time;
   infusionTime = null;
   twoHrInterval = [];
   sixHrInterval = [];
   sixteenHrInterval = [];

   constructor(private bolusSvc: BolusTimeService) { }

   calculate(inputTime: NgbTimeStruct) {
      const infusionTimeStruct = this.bolusSvc.getInfusionTime(inputTime);
      this.infusionTime = this.bolusSvc.getTimeFormat(infusionTimeStruct);
      
      this.twoHrInterval = this.bolusSvc.getIntervalTime(infusionTimeStruct, 2);
      this.sixHrInterval = this.bolusSvc.getIntervalTime(infusionTimeStruct, 6);
      this.sixteenHrInterval = this.bolusSvc.getIntervalTime(infusionTimeStruct, 16);
   }
}
