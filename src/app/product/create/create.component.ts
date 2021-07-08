import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductService } from '../service/product-service';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  form: FormGroup;
   
  constructor(
    public productService: ProductService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productDetails: new FormControl(''),
      productType: new FormControl('',[Validators.required]),
      productPrice: new FormControl(0.0, [Validators.required]),
      productQuantity: new FormControl(0,[Validators.required])
    });
  }

  
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.productService.create(this.form.value).subscribe(res => {
         console.log('Product created successfully!');
         this.router.navigateByUrl('product/index');
    })
  }
  
}