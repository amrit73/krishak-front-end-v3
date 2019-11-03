import { Component, OnInit } from '@angular/core';
import Products from '../Products';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private productwa$
  products: Products[];
  filteredProducts: Products[] = [];
  category: string;

  constructor(private route: ActivatedRoute, private ps: ProductsService) {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      //  console.log(this.category); // Print the parameter to the console. 
    });
  }

  populateProducts() {
    // this.ps.getProductes()
    //   .switchMap(products => {
    //     this.products = products;
    //     console.log(products);
    //     return this.route.queryParamMap;
    //   })
    //   .subscribe(params => {
    //     this.category = params.get('category');
    //     this.applyCatFilter();
    //   });



  }

  ngOnInit() {
    this.ps
      .getProductes()
      .subscribe((data: any[]) => {
        console.log(data[0])
        this.products = data[0].data;;
        // this.applyCatFilter()
      });

    

  }

  private applyCatFilter() {
    console.log(this.category)
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.productCategory === this.category) : this.products;
  }

}
