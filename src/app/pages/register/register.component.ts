import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  posts:any;
  url:string="http://localhost:8080/api/user";
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  addUsers(u_name,u_email,u_password,u_type){
    this.posts= {u_name:u_name,u_email:u_email,u_pass:u_password,u_type:u_type}
    let body=JSON.stringify(this.posts)
   // console.log(this.posts,"Successfull",body);
    this.httpClient.post(this.url+"/register",body,{ headers :new HttpHeaders
      (
      {'Content-Type':'application/json'},
      )
    
    })
    .subscribe(response => {
      console.log("sucessful",Response);
    });
    alert("User Successfully Registered ");


}

}
