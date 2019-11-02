import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  category: string;
  cart:String;
  
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
    });
    this.cart = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cart)
   }

  ngOnInit() {
    
  }

}
