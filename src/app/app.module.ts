import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatExpansionModule, MatSortModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FilteredproductsComponent } from './filteredproducts/filteredproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    TestComponent,
    LoginComponent,
    IndexComponent,
    SignupComponent,
    ProductsComponent,
    AddProductsComponent,
    SidenavComponent,
    CartComponent,
    CategoriesComponent,
    FilteredproductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatListModule, 
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,                               
    ReactiveFormsModule ,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
