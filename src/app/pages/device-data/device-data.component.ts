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
export class chrt {
  constructor(
  public count,
  public days,
  public temp,
  public hum
  )
  {

  }
}

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.css']
})



 

export class DeviceDataComponent {
   
  teledata:any;
  constructor(private httpClient: HttpClient,
    private deviceDataService:DevicedataService) { 
    
    this.deviceDataService.getAllTelemetryDevice().subscribe(
      data => {
         this.teledata = data
        //console.log(this.teledata)
      },
      error => {
        console.log(error)
      }
      
    )
    



  }

  

 

}
