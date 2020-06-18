import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tdata} from 'src/app/pages/device-data/device-data.component'
import { PROXYURL, API_URL, headerlocal } from '../app.constant';
@Injectable({
  providedIn: 'root'
})
export class DevicedataService {

  constructor(private httpClient:HttpClient) { }
  
  getAllTelemetryDevice(){
    return this.httpClient.get<tdata[]>(`${API_URL}/api/telemetry/all`,{headers:headerlocal} )
  }

  getAllChartDevice(){
    return this.httpClient.get<tdata[]>(`${API_URL}/api/telemetry/chart`,{headers:headerlocal} )
  }
}
