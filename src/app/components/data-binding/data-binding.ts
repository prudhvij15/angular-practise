import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [
FormsModule
  ],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {



  userName : string= 'Virat Kohli'
  img_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixMUT-tvYkn-4K0khhYC3lKHV_mRmBGpc0g&s"
  flag = true
rowSpanValue =2

num1 = 10;
num2 = 20
user ={
  name : 'sanjay',
  age:40,
  addr:"banagalore"
}
  toggleFlag(){
    this.flag = !this.flag
  }

  addition(num3 :any,num4:any){
console.log(`Addiition of ${num3} and ${num4} os ${+num3+ +num4}`)
  }


}
