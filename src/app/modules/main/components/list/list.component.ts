import { Component, Input, OnInit } from '@angular/core';

import { IListItem } from '@app/modules/main/models/list-item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listItems!: IListItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
