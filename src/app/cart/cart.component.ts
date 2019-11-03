import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


import { ProductEntity } from '../product.entity';
import { Item } from '../item.entity';
import { ProductsService } from '../products.service';

@Component({
  templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;
  prod: ProductEntity[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { 

  }



  ngOnInit() {
    localStorage.setItem("last_track","");
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];


      if (id) {

        this.productService
          .findCart(id)
          .subscribe((data: ProductEntity[]) => {
            this.prod = data;

            var item = {
              product: this.prod,
              quantity: 1
            };
            
            if (localStorage.getItem('cart') == null) {
              console.log(item)
              let cart: any = [];
              cart.push(JSON.stringify(item));
              localStorage.setItem('cart', JSON.stringify(cart));

            } else {
              let cart: any = JSON.parse(localStorage.getItem('cart'));
              let index: number = -1;
              for (var i = 0; i < cart.length; i++) {
                let item: Item = JSON.parse(cart[i]);
                if (item.product[0]._id == id) {
                  index = i;
                  break;
                }
              }
              if (index == -1) {
                cart.push(JSON.stringify(item));
                localStorage.setItem('cart', JSON.stringify(cart));
              } else {
                let item: Item = JSON.parse(cart[index]);
                item.quantity += 1;
                cart[index] = JSON.stringify(item);
                localStorage.setItem("cart", JSON.stringify(cart));
              }
            }
            this.loadCart();

          });




      } else {
        this.loadCart();
      }
    });
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));

    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      console.log(item.product[0].pricePerUnit)
      this.items.push({
        product: item.product[0],
        quantity: item.quantity
      });
      this.total += parseInt(item.product[0].pricePerUnit) * parseInt(item.quantity);
    }

  }

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product[0]._id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  checkout(){
    var token = localStorage.getItem("success_login");
    if(token){
      window.location.href = '/checkout';
    }else{
      localStorage.setItem("last_track","carting");
      window.location.href = '/login';
    }
  }

}