import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:90';
  versionuri = '/getversion';

  constructor(private http: HttpClient) { }

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

  find(id) {

    return this.
      http
      .get(`${this.uri}/${id}`);
  }

  editProduct(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
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
