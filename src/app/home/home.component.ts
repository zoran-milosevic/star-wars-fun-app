import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INavBarItem } from '../modules/shared/models/navbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems$!: Observable<INavBarItem[]>;

  constructor() {
    this.initialize();
  }

  ngOnInit(): void {
  }

  initialize() {
    const items = <INavBarItem[]>[
      { title: 'Home', url: 'home', active: true },
      { title: 'Contact', url: 'contact', active: false },
      { title: 'About', url: 'about', active: false },
      { title: 'Login', url: 'login', active: false }
    ];

    this.menuItems$ = of(items);
  }
}
