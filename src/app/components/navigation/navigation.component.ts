import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INavBarItem } from 'src/app/modules/shared/models/navbar.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() menuItems$!: Observable<INavBarItem[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
