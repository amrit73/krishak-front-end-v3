import { Component, OnInit } from '@angular/core';
import Products from '../Products';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filteredproducts',
  templateUrl: './filteredproducts.component.html',
  styleUrls: ['./filteredproducts.component.css']
})
export class FilteredproductsComponent implements OnInit {


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



  ngOnInit() {
    this.ps
      .find(this.category)
      .subscribe((data: Products[]) => {
        console.log(data)
        this.products = data;
        
      });

    // this.ps.find(this.category)
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


}



