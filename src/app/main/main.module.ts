import { CoreModule } from './../core/core.module';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

@NgModule({
   declarations: [MainComponent],
   imports: [CommonModule, MainRoutingModule, CoreModule, FormsModule],
})
export class MainModule {}
