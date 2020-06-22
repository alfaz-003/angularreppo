import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {TOKEN} from 'src/app/app.constant'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  posts:any;
  static output:any;
  url:string="http://localhost:8080/api/user/authenticate";
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
 
  chekUsers(username,password){
    this.posts={username:username,password:password}
    let body=JSON.stringify(this.posts)
    //console.log(this.posts,"Successfull",body);
    this.httpClient.post<any>(this.url,body,{ headers :new HttpHeaders
      (
      {'Content-Type':'application/json'},
      )
    
    })
    .subscribe((data)=>{
      console.log(data.jwt)      
      sessionStorage.setItem(TOKEN,`Bearer ${data.jwt}`)
     LoginComponent.output= data;
    });

}


  public static getToken()
  {
    return LoginComponent.output;
  }

}
