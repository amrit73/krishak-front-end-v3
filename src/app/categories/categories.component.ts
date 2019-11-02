import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from './category.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$;
  @Input('category') category;
  categoryparam: String

  constructor(categoryService: CategoryService, private location: Location, private route: ActivatedRoute) {
    this.categories$ = categoryService.getData();
   
  }

  reloadThat(cname) {
    this.route.queryParams.subscribe(params => {
      this.categoryparam = params['category'];
      //  console.log(this.category); // Print the parameter to the console. 
    });
    if (this.categoryparam) {
      location.assign("/list/"+cname+"?category="+cname);
    }
  }

  ngOnInit() {

  }

}
