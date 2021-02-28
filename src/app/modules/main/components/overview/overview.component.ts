import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SwapiService } from '@app/modules/main/providers/swapi.service';

import { IDropDownItem } from '@app/modules/main/models/drop-down-items.model';
import { ISearchResult } from '@app/modules/main/models/search-result.model';
import { IListItem } from '@app/modules/main/models/list-item.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [SwapiService]
})
export class OverviewComponent implements OnInit {

  loading: boolean = false;
  dropDownItems: IDropDownItem[] = [];
  listItems: IListItem[] = [];
  searchResult!: ISearchResult;
  currentType: number = 0;
  currentPage: number = 1;
  lastPage: boolean = false;

  constructor(private swapi: SwapiService, private route: ActivatedRoute) {

    this.getResources();
  }

  getResources(): void {
    this.loading = true;

    this.dropDownItems.push({ key: 0, value: 'All resources' })

    this.swapi.getResources()
      .subscribe(res =>
        Object.entries(res)
          .map((x, i) => {
            this.dropDownItems.push(<IDropDownItem>{
              key: i + 1,
              value: x[0],
              selected: this.getRouteSelected(x)
            });
          })
      );
  }

  getRouteSelected(x: any): boolean {
    const queryParams = this.route.snapshot.queryParams;

    const selected = queryParams.resource === x[0];

    if (selected) {
      this.currentType = x[1];
    }

    return selected;
  }

  getResourceByType(selectedType?: number, page: number = 1) {
    this.loading = true;

    let type = '';

    if (!!selectedType && selectedType > 0) {
      type = this.dropDownItems.find(item => item.key === selectedType)?.value || '';
    }

    this.swapi.getResourceByType(type, page)
      ?.subscribe(res => {
        this.searchResult = <ISearchResult>res;

        this.setListItems();
        this.setPage(page);
      });
  }

  setListItems() {
    this.listItems = [];

    this.searchResult.results.forEach(x => this.listItems.push(<IListItem>{
      id: this.getPathFromUrl(x.url, 'id'),
      name: x.name || x.title,
      model: x.model || '',
      resource: this.getPathFromUrl(x.url, 'type'),
      url: x.url
    }));
  }

  getPathFromUrl(url: string, type: string): string {
    const u = new URL(url);
    const path = u.pathname.split('/');

    let value = '';

    switch (type) {
      case 'id':
        value = path[path.length - 2];
        break;
      case 'type':
        value = path[path.length - 3];
        break;
      default:
        break;
    }

    return value;
  }

  setPage(page: number) {
    this.currentPage = page;
    this.lastPage = this.searchResult.next == null ? true : false;
  }

  pageChanged(value: any) {
    this.getResourceByType(Number(this.currentType), Number(value));
  }

  dropDownChanged(value: any) {
    this.currentType = Number(value);
    this.currentPage = 1;

    this.getResourceByType(Number(this.currentType), this.currentPage);
  }

  ngOnInit(): void {
  }

}
