import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BolusTimeComponent } from './bolus-time.component';
import { RouterModule, Routes } from '@angular/router';

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
      RouterModule.forChild(routes)
   ]
})
export class BolusTimeModule { }
