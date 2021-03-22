import { LabelValueItem } from './../../models/label-value-item';
import { BaseComponent } from './../../utility/base-component';
import {
   Component,
   ChangeDetectionStrategy,
   Input,
   Output,
   EventEmitter,
   ChangeDetectorRef,
} from '@angular/core';

@Component({
   selector: 'tpa-dropdown',
   templateUrl: './dropdown.component.html',
   styleUrls: ['./dropdown.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent extends BaseComponent {
   @Input() items: LabelValueItem<string>[];
   @Output() selectItem = new EventEmitter<string>();

   selected: LabelValueItem<string> = {
      label: 'Select Item',
      value: null,
   };

   constructor(private cdr: ChangeDetectorRef) {
      super();

      this.onChanges$.subscribe(() => {
         this.selected = this.items?.length > 0 ? this.items[0] : null;
      });
   }

   onSelect(item) {
      this.selected = item;
      this.selectItem.emit(item.value);
      this.cdr.detectChanges();
   }
}
