import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  @Input() columns: Array<string> = [];
  @Input() tableWidth: number = 0;
  @Input() tableCellWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
