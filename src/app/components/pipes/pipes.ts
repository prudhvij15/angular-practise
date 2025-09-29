import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgePipe, OrdinalPipe, RomanPipe, SalutationPipe, Search } from '../../custom-pipes/ordinal-pipe';
import employee from './employee';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,FormsModule,OrdinalPipe,RomanPipe,AgePipe,SalutationPipe,Search],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {



  myName = 'SaChIn tenDuLkAr';
  sal = 5000;

  today = new Date();

  user ={
    name :'sanjay',
    address : 'Bangalore'
  }

  arr=[10,20,30,40,50,60]


  num : number = 21;
  num2 : number =0


  date  : Date= new Date();

employeesData = employee
searchText  : any = ""




}
