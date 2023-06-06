import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map}from 'rxjs/operators'
import {dataFetch} from '../services/dataFetch'
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json')
  httpOptions={
    headers:this.headers
  }


  constructor(private http:HttpClient) { }
   url:string="https://fakestoreapi.com/products";
  getdata(){
    
    return this.http.get(this.url)

   
  }
  
  onDeleteProduct(id: number){
    const url =`${this.url}/${id}`;
    return this.http.delete(url,this.httpOptions).subscribe()

  }
  getUpdateProduct(id:number){
    const url =`${this.url}/${id}`;

    return this.http.get(url,this.httpOptions)
  }
  updateProduct(user:dataFetch){
    const url =`${this.url}/${user.id}`;

    return this.http.put(url,this.httpOptions).pipe(
      map(()=>user)
    )
  }
  
  
  
  


  
  

 
   

  }

