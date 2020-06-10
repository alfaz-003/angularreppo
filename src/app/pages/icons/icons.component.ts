import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{map} from "rxjs/operators";
import { headerlocal } from 'src/app/app.constant';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']

})
export class IconsComponent  {
  posts:any;
  products;
 url:string="http://localhost:8080/api/device";
 
  constructor(private httpClient: HttpClient) { 
    
    this.httpClient.get(this.url+"/all",{headers:headerlocal}).subscribe(
      (Response) => {
        this.products = Response;
        console.log("Function Runs Successfully", this.products);
   });


  }
  onDelete(products){
    console.log(products.empid);
    this.httpClient.delete(this.url+"/delete/id/" + products.empid)
    .subscribe(response => {
      let index = this.products.indexOf(products) ;
      this.products.splice(index,1);
      console.log(response);
    });
  }

  Add(employee_id,employee_name,employee_role){
    this.posts={empid:employee_id,empname:employee_name,emprole:employee_role}
    let body=JSON.stringify(this.posts)
    console.log(this.posts,"Successfull",body);
    this.httpClient.post(this.url+"/create",body,{ headers :new HttpHeaders
      (
      {'Content-Type':'application/json'},
      )
    
    })
    .subscribe(response => {
      console.log("sucessful",Response);
    });


  }

  Update(u_id,u_name){
    this.posts={empname:u_name}
    let body=JSON.stringify(this.posts)
    console.log(this.posts,"Successfull",body);
    this.httpClient.put(this.url+"/update/id/"+u_id,body,{ headers :new HttpHeaders
      (
      {'Content-Type':'application/json'},
      )
    
    })
    .subscribe(response => {
      console.log("sucessful",Response);
    });


  }


  
  
}
