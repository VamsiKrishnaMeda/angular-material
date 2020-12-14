import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = 'http://127.0.0.1:5000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  startCollection(collectionData) {
    this.http.post(this.baseUrl + 'collection', JSON.stringify(collectionData), this.httpOptions).subscribe();
  }

  startPipeline(pipelineData) {
    this.http.post(this.baseUrl + 'practice', JSON.stringify(pipelineData), this.httpOptions).subscribe();
  }

  mongoImport(importData) {
    this.http.post(this.baseUrl + 'mongo', JSON.stringify(importData), this.httpOptions).subscribe();
  }

  keywordAdder(adderData) {
    this.http.post(this.baseUrl + 'mongo', JSON.stringify(adderData), this.httpOptions).subscribe();
  }

  runAnalysis(analyticsData) {
    return this.http.post(this.baseUrl + 'process', JSON.stringify(analyticsData), this.httpOptions);
  }

}