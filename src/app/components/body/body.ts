import { Component } from '@angular/core';
import { DataBinding } from "../data-binding/data-binding";
import { Directives } from "../directives/directives";
import { ProductList } from "../product-list/product-list";
import { Demo1 } from "../demo1/demo1";

@Component({
  selector: 'app-body',
  imports: [DataBinding, Directives, ProductList, Demo1],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
