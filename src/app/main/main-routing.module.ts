import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
   {
      path: '',
      component: MainComponent,
      children: [
         {
            path: '',
            loadChildren: () => import('./tissue-calc/tissue-calc.module').then((m) => m.TissueCalcModule)
         },
         {
            path: 'bolus-time',
            loadChildren: () => import('./bolus-time/bolus-time.module').then((m) => m.BolusTimeModule)
         }
      ]
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class MainRoutingModule { }
