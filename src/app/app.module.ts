 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./models/material/material.module";
import { FilterAccountsPipe } from './pipes/filter-accounts.pipe';
import {FormsModule} from "@angular/forms";
import { FilterForAccountsPipe } from './pipes/filter-for-accounts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterAccountsPipe,
    FilterForAccountsPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
