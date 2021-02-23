import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { INavBarItem } from '@app/modules/shared/models/navbar.model';

import { AuthenticationService } from '@app/modules/authentication/providers';
import { NavBarService } from '@app/modules/shared/providers';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems$!: Observable<INavBarItem[]>;
  loggedInUser: boolean = false;

  constructor(private authenticationService: AuthenticationService, private navbarService: NavBarService) {

    this.authenticationService.currentUser.subscribe(x => {
      this.loggedInUser = Object.keys(x).length !== 0 ? true : false;
    });

    this.menuItems$ = of(this.navbarService.menuItems);
  }

  ngOnInit(): void {
  }
}
