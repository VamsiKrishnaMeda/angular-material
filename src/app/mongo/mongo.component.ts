import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api-service/api-service.service';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.scss']
})
export class MongoComponent implements OnInit {

  importForm;
  adderForm;
  importData;
  adderData;

  constructor(private formBuilder: FormBuilder, private apiService: ApiServiceService) { 
    this.importForm = this.formBuilder.group({
      importDirectory: '',
      importDatabase: '',
      importCollection: ''
    });
    this.adderForm = this.formBuilder.group({
      adderDatabase: '',
      adderCollection: '',
      adderKeywords: ''
    });
  }

  ngOnInit(): void {
  }

  runImport() {
    this.importData = {
      process: 'import',
      directory: this.importForm.get('importDirectory').value,
      database: this.importForm.get('importDatabase').value,
      collection: this.importForm.get('importCollection').value
    };
    this.apiService.mongoImport(this.importData);
  }

  runAdder() {
    this.adderData = {
      process: 'adder',
      database: this.adderForm.get('adderDatabase').value,
      collection: this.adderForm.get('adderCollection').value,
      keywords: this.adderForm.get('adderKeywords').value
    };
    this.apiService.keywordAdder(this.adderData);
  }

}
