import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatDataPipe } from './pipes/format-data.pipe';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FormatDataArrayPipe } from './pipes/format-data-array.pipe';
import { SortNumberPipe } from './pipes/sort-number.pipe';
import { SortStringPipe } from './pipes/sort-string.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SortPipe } from './pipes/sort.pipe'

@NgModule({
  declarations: [
    AppComponent,
    FormatDataPipe,
    FilterPipe,
    FormatDataArrayPipe,
    SortNumberPipe,
    SortStringPipe,
    CapitalizePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
