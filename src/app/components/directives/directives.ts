import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule,CommonModule ],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {

  num :number = 4;


  cars= ['Tata','Honda','Maruthi','Hondai','Toyota']
   employees = [
    { id: 1, name: 'John Doe', gender: 'Male', salary: 50000 },
    { id: 2, name: 'Jane Smith', gender: 'Female', salary: 60000 },
    { id: 3, name: 'Alice Johnson', gender: 'Female', salary: 55000 },
    { id: 4, name: 'Bob Brown', gender: 'Male', salary: 70000 }
  ];


  myStyle1 ={
    color : 'red',
    border : '5px dotted green',
    padding : '5px'
  }
   myStyle2 ={
    color : 'blue',
    border : '5px dotted yellow',
    padding : '10px'
  }


  isActive = true;
  isDisabled = false
}
