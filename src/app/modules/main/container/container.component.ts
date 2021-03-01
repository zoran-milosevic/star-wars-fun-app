import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  routeParams: any;

  constructor(private router: Router, private route: ActivatedRoute) {

    if (router.navigated) {
      this.router.navigate(['/home/overview']);
    }
  }

  ngOnInit(): void {

  }

}
