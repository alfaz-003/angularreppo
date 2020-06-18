import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { NewComponent } from './pages/new/new.component';
import { BrowserModule } from '@angular/platform-browser';
import { DevicedataService } from './service/devicedata.service';
import { DeviceDataComponent } from './pages/device-data/device-data.component';
import {ChartsModule} from 'ng2-charts'
import { CommonModule } from '@angular/common';

// import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    NewComponent,
   
    
  ],
  providers: [
    DevicedataService,
    DeviceDataComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
