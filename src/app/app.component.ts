import { Component } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private signalRService: SignalrService ){
    this.signalRService.start();
  }
  title = 'OnlineCalculator';
}
