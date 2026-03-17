import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private storeUrl: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.storeUrl);
  }

  addProduct(product: any) {
    return this.http.post(`${this.storeUrl}/add`, product);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${this.storeUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.storeUrl}/${id}`);
  }
}
