import { BaseService } from './../utility/base-service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';

export type BolusTime = 2 | 6 | 16;

@Injectable()
export class BolusTimeService extends BaseService {
   readonly One_Hour = 60;


   constructor() {
      super();
   }

   getInfusionTime(inputTime: NgbTimeStruct) {
      if (!inputTime || !inputTime?.hour || !inputTime?.minute) {
         return;
      }

      const time = moment().utc().hours(inputTime?.hour).minutes(inputTime?.minute);

      const infusion = time.add(1, 'm');
      return {
         hour: parseInt(infusion.format('h'), 10),
         minute: parseInt(infusion.format('m'), 10),
         second: parseInt(infusion.format('s'), 10)
      } as NgbTimeStruct;
   }

   getTimeFormat(inputTime: NgbTimeStruct) {
      if (!inputTime || !inputTime?.hour || !inputTime?.minute) {
         return;
      }

      const time = moment().utc().hours(inputTime?.hour).minutes(inputTime?.minute);
      return time.format('h:m');
   }

   getIntervalTime(infusionTime: NgbTimeStruct, bolusTime: BolusTime) {
      if (!infusionTime?.hour || !infusionTime?.minute) {
         return;
      }

      const time = moment().utc().hours(infusionTime?.hour).minutes(infusionTime?.minute);
      const timeIntervalRef = {
         2: 15,
         6: 30,
         16: 60
      };

      let timeIntervals = []
      const loopTimes = (this.One_Hour * bolusTime) / timeIntervalRef[bolusTime];
      for (let index = 0; index < loopTimes; index++) {
         const intervalValue = time.add(timeIntervalRef[bolusTime], 'm');
         timeIntervals = [...timeIntervals, intervalValue.format('h:m')];
      }

      return timeIntervals;
   }
}
