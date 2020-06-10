import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {headerlocal, PROXYURL, API_URL} from 'src/app/app.constant'
import { DevicedataService } from 'src/app/service/devicedata.service';
import  { FormsModule } from '@angular/forms';
export class tdata {
  constructor(
  public telemetryid,
  public deviceid,
  public temperature,
  public humidity,
  public enqueuedtime)
  {

  }
}

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.css']
})



 

export class DeviceDataComponent {
   
  teledata: tdata[]
  constructor(private httpClient: HttpClient,
    private deviceDataService:DevicedataService) { 
    
    /*
    var header = {
      headers: new HttpHeaders()
      .set('Authorization',  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGZhekAxMjMiLCJleHAiOjE1OTE1Nzk0MzAsImlhdCI6MTU5MTU0MzQzMH0.xJenlBcjQ19RLujTqC6hj5x5kRF1wJKp1Sj97IDW3oM')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      
    }*/
    // const httpOptions = {
    //   headers: new HttpHeaders({ 
    //   'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGZhekAxMjMiLCJleHAiOjE1OTE2NTM5ODYsImlhdCI6MTU5MTYxNzk4Nn0.I9gWkmagBRtvy9Y4R_RaJnUMLnIB9q4MUkmtv_N6ukY'})
    // };

    // console.log(httpOptions);
    console.log(headerlocal)
    this.deviceDataService.getAllTelemetryDevice().subscribe(
      data => {
         this.teledata = data
        console.log(this.teledata)
      },
      error => {
        console.log(error)
      }
      
    )
    


  }


 

}
