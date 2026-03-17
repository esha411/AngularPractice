import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private storeUrl: string = "https://dummyjson.com/products";

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.storeUrl);
  }
}