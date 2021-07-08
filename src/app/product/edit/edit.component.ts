import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductService } from '../service/product-service';
import { Product } from '../model/product';
import { Post } from '../model/post';
   
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    
  id: number;
  product: Product;
  form: FormGroup;
  
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    this.productService.find(this.id).subscribe((data: Product)=>{
      this.product = data;
    });
    
    this.form = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productDetails: new FormControl(''),
      productType: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
      productQuantity: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.productService.update(this.id, this.form.value).subscribe(res => {
         console.log('Product updated successfully!');
         this.router.navigateByUrl('product/index');
    })
  }
   
}