import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../models/navigation-item'

@Component({
  selector: 'tpa-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavigationComponent implements OnInit {
  @Input() items: NavigationItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
