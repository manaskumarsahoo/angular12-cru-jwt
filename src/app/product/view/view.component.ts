import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../model/product';

import { ProductService } from '../service/product-service';
  
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   
  id: any;
  product: Product;
   
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    console.log('Params :' + JSON.stringify(this.route.snapshot.params));
      
    this.productService.find(this.id).subscribe((data: Product)=>{
      this.product = data;
    });
  }
  
}