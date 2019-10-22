import { Component, OnInit } from '@angular/core';
import Products from '../Products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: Products[];

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps
      .getProductes()
      .subscribe((data: Products[]) => {
        console.log(data)
        this.products = data;
    });
  }

}
