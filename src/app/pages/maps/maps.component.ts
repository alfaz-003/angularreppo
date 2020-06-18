import { Component, OnInit } from '@angular/core';  
import { Chart } from 'chart.js';  
import { HttpParams,HttpClient,HttpHeaders } from '@angular/common/http';
import {chrt} from 'src/app/pages/device-data/device-data.component'
import {headerlocal, PROXYURL, API_URL} from 'src/app/app.constant'
import { DevicedataService } from 'src/app/service/devicedata.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit{

 
  teledata:any;
  products:any;
  url:string="http://localhost:8080/api/telemetry";
  humidity:any = [];  
  temperature:any = [];  
  Linechart:any = [];
  timestamp:any=[];
  tempavgchart:any=[];
  humavgchart:any=[];
  Linehumchart:any=[]
  tempdomute:any=[];
  donughthum:any=[];
  constructor(private httpClient: HttpClient,
    private deviceDataService:DevicedataService) { 
      this.deviceDataService.getAllTelemetryDevice().subscribe(
        data => {
           this.teledata = data
         // console.log(this.teledata)
        },
        error => {
          console.log(error)
        }
        
      )
    
   
  }
  ngOnInit(){
    this.deviceDataService.getAllTelemetryDevice().subscribe(
      data => {  
         data.forEach(x => {  
        this.humidity.push(x.humidity);  
        this.temperature.push(x.temperature);  
        this.timestamp.push((x.enqueuedtime));
      }); 
    // console.log(this.humidity)
      this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        
        data: {  
          
          labels: this.timestamp,  
          datasets: [  
            {  
              data: this.temperature,  
              
              borderColor:  "#f2f3f4",  
              backgroundColor: "#3498db",  
              
            }  
          ]  
        },  
        
        options: {  
          legend: {  
            display: false,
            labels : {
              

          }
             
          },  
          scales: {  
            xAxes: [{  
              
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Dates'
              }
            }],  
            yAxes: [{  
              display: true ,
              scaleLabel: {
                display: true,
                labelString: 'Temperature',
              }
            }],  
          }  
        }  
      });  


      //humidity 
      this  
      this.Linehumchart = new Chart('canvas4', {  
        type: 'line',  
        
        data: {  
          
          labels: this.timestamp,  
          datasets: [  
            {  
              data: this.humidity,  
              borderColor:  "#f2f3f4",  
              backgroundColor: "#ec7063",
              
            }  
          ]  
        },  
        
        options: {  
          legend: {  
            display: false,
            labels : {
              

          }
             
          },  
          scales: {  
            xAxes: [{  
              
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Dates'
              }
            }],  
            yAxes: [{  
              display: true ,
              scaleLabel: {
                display: true,
                labelString: 'Humidity',
              }
            }],  
          }  
        }  
      });  

      //donut
     

    });


  }

  dateBetweenDeviceData(startdate,enddate)
  {
    //2020-06-18
    startdate=startdate.substr(0,10);
    enddate=enddate.substr(0,10);
    let params = new HttpParams();
    params = params.append('startdate', startdate);
    params = params.append('enddate', enddate);
    let humavg:any=[];
    let tempvg:any=[];
    let days:any=[];
    
    console.log(params);
        this.httpClient.get<chrt[]>(this.url+"/chart",{headers:headerlocal,params: params},).subscribe(
          (Response) => {
            Response.forEach(x => {  
              days.push(x.days)
              tempvg.push(x.temp)
              humavg.push(x.hum)
            
            });
            this  
            this.tempavgchart = new Chart('canvas2', {  
              type: 'line',  
              data: {  
      
                labels: days,  
                datasets: [  
                  {  
                    data: tempvg,  
                  
              borderColor:  "#f2f3f4",  
              backgroundColor: "#3498db",   
                  }  
                ]  
              },  
              options: {  
                legend: {  
                  display: false 
                },  
                scales: {  
                  xAxes: [{  
                    scaleLabel: {
                      display: true,
                      labelString: 'Day'
                    }
                  }],  
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature'
                    }
                  }]
                 
                }
              }  
            });
            this  
            this.humavgchart = new Chart('canvas3', {  
              type: 'line',  
              data: {  
      
                labels: days,  
                datasets: [  
                  {  
                    data: humavg,  
                    borderColor:  "#f2f3f4",  
                    backgroundColor: "#ec7063",
                  }  
                ]  
              },  
              options: {  
                legend: {  
                  display: false 
                   
                },  
                scales: {  
                  xAxes: [{  
                    scaleLabel: {
                      display: true,
                      labelString: 'Day'
                    }
                  }],  
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Humidity'
                    }
                  }]
                 
                }  
              }  
            });


            //donought
            this  
            this.tempdomute = new Chart('canvas5', {  
              type: 'doughnut',  
              data: {  
                labels: days, 
                 
                datasets: [  
                  {  
                    data: tempvg,  
                    borderColor: '#3cba9f',  
                    backgroundColor: [  
                     
                     "#ec7063",
                      "3498db" ,
                      "#20c7c4",
                      "#20c7c4",
                      "#70bf2a",
                       "#395abd" 
                    ],  
                    fill: true  
                  },
                   
                ]  
              },  
              options: {  
                legend: {  
                  display: true  
                },  
                scales: {  
                  xAxes: [{  
                    display: true  ,
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature'
                    }
                  }],  
                  yAxes: [{  
                    display: true  
                   
                  }],  
                }  
              }  
            });  




             //donought
             this  
             this.donughthum = new Chart('canvas6', {  
               type: 'doughnut',  
               data: {  
                 labels: days, 
                  
                 datasets: [  
                   {  
                     data: humavg,  
                     borderColor: '#3cba9f',  
                     backgroundColor: [  
                      
                      "#ec7063",
                      "3498db" ,
                      "#20c7c4",
                      "#20c7c4",
                      "#70bf2a",
                       "#395abd" 
                     ],  
                     fill: true  
                   },
                    
                 ]  
               },  
               options: {  
                 legend: {  
                   display: true  
                 },  
                 scales: {  
                   xAxes: [{  
                     display: true  ,
                     scaleLabel: {
                       display: true,
                       labelString: 'Humidity'
                     }
                   }],  
                   yAxes: [{  
                     display: true  
                    
                   }],  
                 }  
               }  
             });  
       });
  }


  
}
