import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NumberButtonsComponent } from './number-buttons/number-buttons.component';
import { SocketService } from './services/socket.service';
import { SignalrService } from './signalr.service';

const config: SocketIoConfig = {
	url: 'http://localhost:3000', // socket server url;
	options: {
		transports: ['websocket']
	}
}
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NumberButtonsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [SignalrService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
