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
 devicestatus
 
  constructor(private httpClient: HttpClient) { 
    
    this.httpClient.get(this.url+"/all",{headers:headerlocal}).subscribe(
      (Response) => {
        this.products = Response;
        console.log("Function Runs Successfully", this.products);
   });


  }
  onDelete(products){
    console.log(products.deviceid);
    this.httpClient.delete(this.url+"/delete/"+products.deviceid,{headers:headerlocal})
    .subscribe(response => {
    
      console.log(response);
    });
  }

  Add(devicename,devicestatus){
    this.posts={devicename:devicename,status:devicestatus}
    let body=JSON.stringify(this.posts)
    console.log(this.posts,"Successfull",body);
    this.httpClient.post(this.url+"/create",body,{headers:headerlocal})
    .subscribe(response => {
      console.log("sucessful",Response);
    });


  }

  Update(deviceid,devicename,devicestatus){
    this.posts={devicename:devicename,devicestatus:devicestatus}
    let body=JSON.stringify(this.posts)
    console.log(this.posts,"Successfull",body);
    this.httpClient.put(this.url+"/update/"+deviceid,body,{headers:headerlocal})
    .subscribe(response => {
      console.log("sucessful",Response);
    });


  }

  
}

  
  

