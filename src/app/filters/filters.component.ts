import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class Filters implements OnInit {
  @Input() filterType: string;
  @Input() filterValues: string[];
  @Output() onFilterSelected: EventEmitter<string> = new EventEmitter<string>();
  selectedFilter: string = '';

  ngOnInit() {

  }
  selectFilter(value: string) {
    this.selectedFilter = value;
    this.onFilterSelected.emit(value);
    console.log('selected filter', value);
  }
}
