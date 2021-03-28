import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TissueCalcComponent } from './tissue-calc.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   {
      path: '',
      component: TissueCalcComponent,
   },
];

@NgModule({
   declarations: [TissueCalcComponent],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      CoreModule
   ]
})
export class TissueCalcModule { }
