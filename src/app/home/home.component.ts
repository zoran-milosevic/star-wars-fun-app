import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@app/modules/authentication/providers';
import { NavBarService } from '@app/modules/shared/providers';

import { INavBarItem } from '@app/modules/shared/models/navbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems: INavBarItem[] = [];
  loggedInUser: boolean = false;

  constructor(private authenticationService: AuthenticationService, private navbarService: NavBarService) {

    this.authenticationService.currentUser.subscribe(x => {
      this.loggedInUser = Object.keys(x).length !== 0 ? true : false;
    });

    this.navbarService.items.subscribe(x => this.menuItems = x);
  }

  ngOnInit(): void {
  }
}
