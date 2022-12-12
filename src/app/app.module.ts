import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NumberButtonsComponent } from './number-buttons/number-buttons.component';
import { SignalrService } from './signalr.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NumberButtonsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SignalrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
