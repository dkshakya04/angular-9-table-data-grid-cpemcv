import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Pagination } from './pagination.pipes';
import { SearchFilterPipe } from './search.pipes';
import { SortingPipes } from './sorting.pipes';
import {SelectionPipes} from './selection.pipes';
import {AlertComponent} from './alert-component/alert.component';
import { LoaderComponent } from './loader/loader.component'
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AlertComponent,
  Pagination, SearchFilterPipe, SortingPipes , SelectionPipes, LoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
