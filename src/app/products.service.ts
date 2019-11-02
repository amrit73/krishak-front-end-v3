import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductEntity } from './product.entity';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:90';
  versionuri = '/getversion';

  private products: ProductEntity[];

  constructor(private http: HttpClient) {
    this.products = [
      {
        _id: '5dae0d868539483f28eacf2d', productName: '1', productCategory: '1', pricePerUnit: '1', description: '1', image: '1', discount: '1', availableLocation: '1', manufacturedLocation: '1', quantity: '1', productExpireData: '1', uploadedBy: '1',
      }
    ]
  }

  addProduct(person_name, Product_name, Product_gst_number) {
    const obj = {
      person_name: person_name,
      Product_name: Product_name,
      Product_gst_number: Product_gst_number
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getProductes() {
    return this
      .http
      .get(`${this.uri}/productslist`);
  }

  find(id: string) {

    return this.
      http
      .get(`${this.uri}/filterlist/${id}`);
  }

  findCart(id : String) {
    return this.
      http
      .get(`${this.uri}/cart/${id}`);
  }

  editProduct(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  private getSelectedIndex(id: String) {
    for (var i = 0; i < this.products.length; i++) {

      if (this.products[i]._id == id) {
        return i;
      }
    }
    return -1;
  }

  updateProduct(person_name, Product_name, Product_gst_number, id) {

    const obj = {
      person_name: person_name,
      Product_name: Product_name,
      Product_gst_number: Product_gst_number
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteProduct(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
