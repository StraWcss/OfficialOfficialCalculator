import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private signalRService: SignalrService, private socketService: SocketService ){
    this.signalRService.start();
  }
  title = 'OnlineCalculator';

  ngOnInit(): void {
  }
}
