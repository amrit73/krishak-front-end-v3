import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  category: string;
  cart: String;
  logged: Boolean;
  productroute: Boolean;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
    });
    var a = JSON.parse(localStorage.getItem('cart'));
    if (a) {
      this.cart = a.length
    }
    else {
      this.cart = "0";
    }
  }

  logOut() {
    localStorage.setItem('success_login', '');
    window.location.href = '/login';
  }

  ngOnInit() {
    var log_state = localStorage.getItem('success_login');
    console.log(log_state)
    if (log_state != '') {
      this.logged = true
    } else if (log_state) {
      this.logged = false
    }
    var route = window.location.href
    if (route.match('admin') && log_state != '') {
      this.productroute = true
    } else {
      this.productroute = false
    }
  }

}
