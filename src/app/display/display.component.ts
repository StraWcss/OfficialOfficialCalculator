import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  total: number = 0;
  history: string = ""

  firstNumber: number | null = null;
  secondNumber: number | null = null;
  selectedNumber: number | null = null; // 0 - 9 
  selectedOperation: string | null = ''; // * + - / 
  constructor() { }

  ngOnInit(): void {

    
  }

  
  onNumClick(number: number) {


    this.selectedNumber = number;
    this.history = this.history.concat(" " + this.selectedNumber.toString());

    

    console.log(this.history);
    console.log(this.selectedNumber)
  }

  onOperatorClick(operator: string){ // operator = + 
    if(this.selectedNumber == null){ 
      //We want to do nothing
      return
    }
    //And if it isn't nothing, we do this:

    let addToHistory = true;
   

    if(addToHistory){

      this.history = this.history + " " + operator
    }

  }

  calculateTotal() {

    switch(this.selectedOperation){
      case "+":
      //this.total += this.selectedNumber?
      //Here
        break;
        
      case "-":
      //this.total += this.selectedNumber?
        break;
      case "/":

        break;
      case "*":

        break;

      case "=":

        break;

      case "clear":
        this.total = 0;
        this.history = "";
        this.selectedNumber = null;
        this.selectedOperation = null;
  
        break;
    }
  }

  //We need to make it so when you hit buttons, we keep track of buttons pressed 
  //

  //Things we will send via websocket
  //Numbers
  //Operations

  //We are going to track totals on our own

  //

}




