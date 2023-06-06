import { Component } from '@angular/core';
import{ProductdataService} from './services/productdata.service'
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fetchAPI';
  firstName:any;
  p:number=1;

  
  users:any;
  constructor(private prData:ProductdataService,private router:Router){}

  ngOnInit(){
    this.prData.getdata().subscribe(res=>{
      this.users=res

    })
    


  }
  Search(){
    if(this.firstName ==""){
      this.ngOnInit();
    } else{
      this.users = this.users.filter((res: { firstName: { toLocaleLowercase: () => string; }; }): any => {
        return res.firstName.toLocaleLowercase().match(this.firstName.toLocaleLowercase());
      })
    }
  }
  deleteProduct(val){
    if(confirm("Are you sure to delete?")){

    
    this.prData.onDeleteProduct(val).subscribe(data=>{

    })
    this.prData.getdata()subscribe((response)=>{
      this.users=response
    })


  }
}
update(id){
  this.router.navigate(['/update',id])



}
  

    
    
}
