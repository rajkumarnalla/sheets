import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  hTagColumns: Array<string> = [];
  headerColumns: Array<string> = [];
  vTagCells: Array<number> = [];
  tableWidth: number = 0;
  hTableCellWidth: number = 85;
  vTableCellWidth: number = 45;
  rows: Array<Array<string>> = [];

  constructor() { }

  ngOnInit(): void {
    this.headerColumns = [...Array(26)].map((elem, index) => `col ${index+1}`);
    this.vTagCells = [...Array(100)].map((elem, index) => index+1);
    let len = this.vTagCells.length;
    
    for (let i=65; i<=65+25; i++){
      this.hTagColumns.push(String.fromCharCode(i));
    }
    this.tableWidth = (this.hTableCellWidth+2) * this.hTagColumns.length;

    while (len > 1) {
      let row = [];
      for (let i = 0, colCount = this.hTagColumns.length; i < colCount;i++) {
        row.push("r-"+(i+1));
      }
      this.rows.push(row);
      len--;
    }
  }

}
