import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-tag',
  templateUrl: './horizontal-tag.component.html',
  styleUrls: ['./horizontal-tag.component.scss']
})
export class HorizontalTagComponent implements OnInit {

  @Input() columns: Array<string> = [];
  @Input() tableWidth: number = 0;
  @Input() tableCellWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
