import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) { 
    this.categories$ = categoryService.getData();
  }

  ngOnInit() {
    
  }

}
