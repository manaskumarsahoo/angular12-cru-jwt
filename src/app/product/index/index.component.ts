import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { Product } from '../model/product';
import { ProductService } from '../service/product-service';

  
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   
  posts: Post[] = [];
  products : Product[] =[];
  
  constructor(public productService: ProductService) { }
  
  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[])=>{
      this.products = data;
      console.log(this.products);
    })  
  }
  
  deletePost(id){
    this.productService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  
}