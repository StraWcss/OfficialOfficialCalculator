import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

export interface InputData {
	userId: string,
	input: string
}
@Injectable({
	providedIn: 'root'
})
export class SocketService {
	constructor(private socket: Socket) { }

	// emit event
	sendInput(data: any) {
		this.socket.emit('sendNumber', {data});
	} 

	// listen event
	onFetchMovies() {
		return this.socket.fromEvent('fetchNumber');
	}
}