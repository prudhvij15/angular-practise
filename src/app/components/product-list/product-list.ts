import { Component } from '@angular/core';
import productData from './product_data';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import {NgxPaginationModule} from 'ngx-pagination';
import  Swal from 'sweetalert2'
import { Zoomout } from '../../directives/zoomout';


@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    Zoomout

  ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  productsArr = productData;
  faStar  = faStar;
  p:number =1
}


