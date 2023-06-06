import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../services/productdata.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(public route: ActivatedRoute, public router:Router,public prData:productdataservice){}
  val:any;


ngOnInit(){
  let sub = this.route.params.subscribe(params =>{
    this.val = params['id']


  })
  this.prData.getUpdateProduct(this.val).subscribe(data=>{
    
  })


}
}



