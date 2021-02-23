import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INavBarItem } from '@app/modules/shared/models/navbar.model';

import { NavBarService } from '@app/modules/shared/providers/nav-bar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() menuItems$!: Observable<INavBarItem[]>;

  constructor(private navbarService: NavBarService) {

  }

  ngOnInit(): void {

  }

  setActiveRoute(url: string) {
    this.navbarService.setActive(url);
  }
}
