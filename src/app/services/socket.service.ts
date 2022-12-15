import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

export interface Data{
	sentTotal: string,
	sentEquation: string
  }

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	constructor(private socket: Socket) {
		this.socket.fromEvent('input')
	 }

	 currentData = this.socket.fromEvent<any>('input');

	// emit event
	sendInput(data: any) {
		console.log("sent!");
		this.socket.emit('input', data);
	} 

	// listen event
	fetchData() :  any {
		console.log("onFetch");
		console.log("TEST!")
		return this.socket.fromEvent('input').pipe(map((data: any) => {
			console.log('ssssss')
			return data;
			})).subscribe();
	}
}