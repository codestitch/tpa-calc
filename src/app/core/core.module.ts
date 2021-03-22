import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [HeaderComponent, DropdownComponent],
   imports: [CommonModule, NgbModule],
   exports: [HeaderComponent, DropdownComponent],
})
export class CoreModule {}
