import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as jQuery from "jquery"

import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {  ButtonModule,
          CheckboxModule,
          ConfirmDialogModule, 
          DialogModule,
          FileUploadModule,
          InputTextModule, 
          InputMaskModule,          
          OverlayPanelModule,
          ScheduleModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CheckboxModule,
    ConfirmDialogModule, 
    DialogModule,
    FileUploadModule,
    InputTextModule, 
    InputMaskModule,
    OverlayPanelModule,          
    ScheduleModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
