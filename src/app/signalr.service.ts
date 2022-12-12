import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";



  export interface SignalRConnectionInfo {
  url: string;
  accessToken: string;
}

export interface SignalRHubConnection {
  state: string | null;
  lastUpdated: Date | null;
  connectionId: string | null;
  receivedEvents: SignalREvent[];
}

export interface SignalREvent {
  method: string;
  data: any;
  eventTime: Date;
}
@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection!: HubConnection;

  constructor(private readonly _http: HttpClient) {


    this.hubConnection = new HubConnectionBuilder()
          .withUrl("http://localhost:7163/api")
          .configureLogging(LogLevel.Warning)
          .build();


    console.log()
   


  }

    
  public start = async () => {
    await this.hubConnection.start().then(() => {console.log("connected")})
  }

}
