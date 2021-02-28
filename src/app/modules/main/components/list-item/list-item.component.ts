import { Component, Input, OnInit } from '@angular/core';

import { IListItem } from '@app/modules/main/models/list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item!: IListItem;

  constructor() { }

  ngOnInit(): void {
  }

}
