import { CoreModule } from './../core/core.module';
import { NavigationModule } from './../core/components/navigation/navigation.module';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

@NgModule({
   declarations: [MainComponent],
   imports: [CommonModule, MainRoutingModule, CoreModule, NavigationModule],
})
export class MainModule { }
