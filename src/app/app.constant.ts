import { HttpHeaders } from "@angular/common/http";

export const headerlocal = new HttpHeaders({ 'Authorization': sessionStorage.getItem("token"),'Content-type': 'application/json'})  
//export const headerlocal = new HttpHeaders({ 'Authorization': sessionStorage.getItem("token"),'Content-type': 'application/json'})  
export const API_URL = 'http://127.0.0.1:8080'
export const TOKEN = 'token'
export const PROXYURL = 'http://127.0.0.1:8085'
