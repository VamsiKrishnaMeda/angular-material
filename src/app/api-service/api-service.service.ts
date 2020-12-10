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
    console.log('Calling practice POST method')
    this.http.post(this.baseUrl + 'practice', collectionData, this.httpOptions)
  }

}