import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  loadError = '';

  itemForm = new FormGroup({
    title:       new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price:       new FormControl(0,  [Validators.required, Validators.min(0)]),
    category:    new FormControl('', [Validators.required])
  });

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data: any) => {
        this.productList = data.products;
      },
      error: (err:any) => {
        this.productList = [];
        this.loadError = 'Could not load products. Please try again.';
        console.error(err);
      },
      complete: () => {
        console.log('Fetch complete');
      }
    });
  }

  submitProduct() {
    if (this.itemForm.valid) {
      this.productService.addProduct(this.itemForm.value).subscribe({
        next: (newProduct: any) => {
          this.productList.unshift(newProduct);
          this.itemForm.reset();
        },
        error: (err) => {
          this.loadError = 'Could not add product. Please try again.';
          console.error(err);
        }
      });
    }
  }
}