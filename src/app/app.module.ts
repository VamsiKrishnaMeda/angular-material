import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { MaterialModuleModule } from './material-module/material-module.module';
import { CollectionComponent } from './collection/collection.component';
import { MongoComponent } from './mongo/mongo.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PracticeComponent } from './practice/practice.component'; 

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api-service/api-service.service';

FusionChartsModule.fcRoot(FusionCharts, TimeSeries);

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    MongoComponent,
    AnalyticsComponent,
    NavBarComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    MaterialModuleModule,
    FusionChartsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
