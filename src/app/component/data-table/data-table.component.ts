import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  
  @Input() rows: Array<Array<string>> = [];
  @Input() tableCellWidth: number = 0;
  @Input() tableWidth: number = 0;
  private activeCellId: string = "";
  private columnCount: number = 0;
  private rowCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.rowCount = this.rows.length;
    this.columnCount = Object.keys(this.rows[0]).length;
  }

  @HostListener('document:keydown', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (!this.activeCellId || this.activeCellId == "") {
      return;
    }
    var currentCellId = this.activeCellId;
    var [,,rowIndex, columnIndex]: Array<any> = this.activeCellId.split("-");
    rowIndex = parseInt(rowIndex);
    columnIndex = parseInt(columnIndex);

    let resp = this.handleActiveCellBoxChange(event, rowIndex, columnIndex);
    if (resp != "OUT_OF_BOUNDS") { 
      this.updateScrollPosition(currentCellId);
    }
  }

  handleTableCellClick(rowIndex: number, columnIndex: number): void {
    let cellWidth:any, activeTableCellClass = "app-dt-cell-active";
    var {activeTableCell, activeCellId} = this.getActiveCellDomRef(rowIndex, columnIndex);
    cellWidth = activeTableCell?.style.width.replace("px", "");
    cellWidth = parseInt(cellWidth);
   
    if (this.activeCellId && this.activeCellId != "") {
      document.getElementById(this.activeCellId)?.classList.remove(activeTableCellClass);
    }


    // activeTableCell?.style.width = (cellWidth - 4).toString();
    activeTableCell?.classList.add(activeTableCellClass);

    this.activeCellId = activeCellId;
  }

  trackByFn(index: number, row: any) {
    return index;
  }

  private handleActiveCellBoxChange(event: KeyboardEvent, rowIndex: number, columnIndex: number): any {
    let arrowKeys = {"right":"ArrowRight", "left": "ArrowLeft", "up": "ArrowUp", "down": "ArrowDown"};

    if (Object.values(arrowKeys).indexOf(event.key) >= 0) {
      event.preventDefault();
      if (event.key == arrowKeys.right) {
        if (columnIndex == this.columnCount - 1) {
          return "OUT_OF_BOUNDS";
        }
        columnIndex += 1;
      } else if (event.key == arrowKeys.left) {
        if (columnIndex == 0) {
          return "OUT_OF_BOUNDS";
        }
        columnIndex -= 1;
      } else if (event.key == arrowKeys.up) {
        if (rowIndex == 0) {
          return "OUT_OF_BOUNDS";
        }
        rowIndex -= 1;
      } else if (event.key == arrowKeys.down) {
        if (rowIndex == this.rowCount - 1) {
          return "OUT_OF_BOUNDS";
        }
        rowIndex += 1;
      }

      if (this.activeCellId) {
        this.handleTableCellClick(rowIndex, columnIndex);
      }
    }
  }

  private updateScrollPosition(currentCellId: string) {
    var [,,oldRowIndex, oldColumnIndex]: Array<any> = currentCellId.split("-");
    var [,,rowIndex, columnIndex]: Array<any> = this.activeCellId.split("-");
    var {activeTableCell} = this.getActiveCellDomRef(rowIndex, columnIndex);
    var data:any = activeTableCell?.getBoundingClientRect();
    var activeCellX = data?.x as number, 
      activeCellY = data?.y as number,
      cellPositionX = columnIndex * 87, cellPositionY = rowIndex * 21;
    console.log(data);
    
    if (rowIndex > oldRowIndex && cellPositionY + 50 + 2*21 > window.innerHeight) {
      window.scrollTo(window.scrollX, cellPositionY + 50 + 2*21 - window.innerHeight);
    } else if (rowIndex < oldRowIndex && cellPositionY + 50 + 2*21 > window.innerHeight) {
      window.scrollTo(window.scrollX, cellPositionY + 50 + 2*21 - window.innerHeight);
    } else if (columnIndex > oldColumnIndex  && cellPositionX + 44 + 2*87 > window.innerWidth) {
      window.scrollTo(cellPositionX + 44 + 2*87 - window.innerWidth, window.scrollY);
    } else if (columnIndex < oldColumnIndex  && cellPositionX + 44 + 87 > window.innerWidth) {
      window.scrollTo(cellPositionX + 44 + 87 - window.innerWidth, window.scrollY);
    }
  }

  private getActiveCellDomRef(rowIndex: number, columnIndex: number) {
    let activeCellId = `app-dt-${rowIndex}-${columnIndex}`;

    return {activeCellId, activeTableCell: document.getElementById(activeCellId)};
  }

}
