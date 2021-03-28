import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';

@NgModule({
   declarations: [MobileNavigationComponent],
   imports: [
      CommonModule,
      RouterModule
   ],
   exports: [MobileNavigationComponent]
})
export class NavigationModule { }
