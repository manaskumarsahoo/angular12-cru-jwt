import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
import { Post } from '../model/post';

   
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  private apiURL = "http://localhost:8088/api/v1/";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/products/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiURL + '/product/', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiURL + 'product/' + id)
    .pipe(
      catchError(this.errorHandler) 
    )
  }
   
  update(id, post): Observable<Product> {
    return this.httpClient.put<Product>(this.apiURL + 'product/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Post>(this.apiURL + 'product/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}