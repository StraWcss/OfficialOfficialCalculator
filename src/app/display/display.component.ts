import { Component, OnInit } from '@angular/core';
import { Data, SocketService } from '../services/socket.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  total: string = "";
  equation: string = ""
  
  constructor(private socketService: SocketService) { 
    
  }

  ngOnInit(): void {
    this.socketService.currentData.subscribe((data: any) => {
      console.log("Just got new data bro");
      this.total = data.sentTotal;
      this.equation = data.sentEquation;
    })

    this.socketService.fetchData().subscribe((data: Data) => {
      console.log("Just got new data bro");
      this.total = data.sentTotal;
      this.equation = data.sentEquation;
    });
  }

  
  onNumClick(number: number) {

    this.equation = this.equation.concat(number.toString());

    this.socketService.sendInput({
      sentEquation: this.equation,
      sentTotal: this.total
    } )
    


   
  }

  clear(){
    this.equation = "";
    this.total = "";

    this.socketService.sendInput({
      sentEquation: "",
      sentTotal: ""
    } )
    

  }

  onOperatorClick(operator: string){ // operator = + 
    this.equation = this.equation.concat(operator);

    this.socketService.sendInput({
      sentEquation: this.equation,
      sentTotal: this.total
    } )

  }

  calculate(){
    this.total = eval(this.equation); //"1 + 3 / 3 * 2341 + 2134 +  82"

    this.socketService.sendInput({
      sentEquation: this.equation,
      sentTotal: this.total
    } )
    
  }

  
  }

  //We need to make it so when you hit buttons, we keep track of buttons pressed 
  //

  //Things we will send via websocket
  //Numbers
  //Operations

  //We are going to track totals on our own

  //






