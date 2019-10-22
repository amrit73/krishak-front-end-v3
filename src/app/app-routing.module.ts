import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AddproductsComponent } from './addproducts/addproducts.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'items',
    component: ProductsComponent
  },
  {
    path:'additems',
    component:AddproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
