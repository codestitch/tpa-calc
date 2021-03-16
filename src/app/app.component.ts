import { Component } from '@angular/core';
import { PwaService } from './core/services/pwa.service';

@Component({
   selector: 'tpa-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   constructor(public pwa: PwaService) {}

   installPwa(): void {
      this.pwa.promptEvent.prompt();
   }
}
