import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarService } from '@app/modules/shared/providers/nav-bar.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private router: Router, private navbarService: NavBarService) {

    // this.navbarService.setActive(router.url);
  }

  ngOnInit(): void {
  }

}
