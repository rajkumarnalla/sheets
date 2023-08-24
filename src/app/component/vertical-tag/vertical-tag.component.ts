import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-tag',
  templateUrl: './vertical-tag.component.html',
  styleUrls: ['./vertical-tag.component.scss']
})
export class VerticalTagComponent implements OnInit {

  @Input() cells: Array<number> = [];
  @Input() tableCellWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
