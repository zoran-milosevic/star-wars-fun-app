import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SwapiService } from '@app/modules/main/providers/swapi.service';

import { IDetail } from '@app/modules/main/models/detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [SwapiService]
})
export class DetailComponent implements OnInit {

  id!: string;
  resource: string = '';
  itemDetail: IDetail[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private swapi: SwapiService) {

    route.params.subscribe(params => {
      this.id = params['id'];
      this.resource = params['resource'];
    });

    this.swapi.getResourceDetailsById(this.id, this.resource)
      .subscribe(res => {
        Object.entries(res)
          .map((x) => {
            this.itemDetail.push(<IDetail>{
              property: x[0],
              value: typeof (x[1]) === 'object' ? x[1].join('<br />') : x[1]
            });
          });
      });
  }

  back() {
    this.router.navigate(['/home/overview'], { queryParams: { resource: this.resource } })
  }

  ngOnInit(): void {
  }

}
