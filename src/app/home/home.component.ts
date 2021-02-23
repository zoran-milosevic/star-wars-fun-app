import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { INavBarItem } from '@app/modules/shared/models/navbar.model';

import { AuthenticationService } from '@app/modules/authentication/providers/authentication.service';
import { NavBarService } from '@app/modules/shared/providers/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems$!: Observable<INavBarItem[]>;
  loggedInUser: boolean = false;

  constructor(private router: Router, private authenticationService: AuthenticationService, private navbarService: NavBarService) {
    
    this.authenticationService.currentUser.subscribe(x => {
      this.loggedInUser = Object.keys(x).length !== 0 ? true : false;
    });

    this.menuItems$ = of(this.navbarService.menuItems);
  }

  ngOnInit(): void {
  }
}
