import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { ColorChangeDirective } from './color-change.directive';
import { PipeandCompoComponent } from './pipeand-compo/pipeand-compo.component';
import { TruncateTextPipe } from './truncate-text.pipe';
import { ChildComponent } from './child/child.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ColorChangeDirective,
    PipeandCompoComponent,
    TruncateTextPipe,
    ChildComponent,
    FlightBookingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
