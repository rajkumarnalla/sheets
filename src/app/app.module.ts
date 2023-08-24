import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './component/sheet/sheet.component';
import { HorizontalTagComponent } from './component/horizontal-tag/horizontal-tag.component';
import { VerticalTagComponent } from './component/vertical-tag/vertical-tag.component';
import { DataTableComponent } from './component/data-table/data-table.component';
import { TableHeaderComponent } from './component/table-header/table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    HorizontalTagComponent,
    VerticalTagComponent,
    DataTableComponent,
    TableHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
