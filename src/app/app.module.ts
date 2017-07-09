import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as jQuery from "jquery"

import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  ButtonModule,
          CheckboxModule,
          ConfirmDialogModule, 
          DialogModule,
          FileUploadModule,
          InputTextModule, 
          InputMaskModule,          
          OverlayPanelModule,
          CalendarModule,
          ScheduleModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    ConfirmDialogModule, 
    DialogModule,
    FileUploadModule,
    InputTextModule, 
    InputMaskModule,
    CalendarModule,
    OverlayPanelModule,          
    ScheduleModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
