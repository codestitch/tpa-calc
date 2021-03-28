import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BolusTimeComponent } from './bolus-time.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
   {
      path: '',
      component: BolusTimeComponent,
   },
];

@NgModule({
   declarations: [BolusTimeComponent],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      NgbTimepickerModule,
      FormsModule
   ]
})
export class BolusTimeModule { }
