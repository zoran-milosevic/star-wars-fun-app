import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: number = 1;
  @Input() lastPage: boolean = false;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  goToPreviousPage() {
    this.pageChanged.emit(--this.currentPage);
  }

  goToNextPage() {
    this.pageChanged.emit(++this.currentPage);
  }
}
