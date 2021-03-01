import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() selectedType: number = 0;
  @Output() searchForTerm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

  }

  search() {
    this.searchForTerm.emit(true);
  }

  reset(searchField: any) {
    searchField.value = '';
  }

  ngOnInit(): void {
   
  }
}
