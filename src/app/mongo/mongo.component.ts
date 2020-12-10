import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  importFlag = false;
  adderFlag = false;

  constructor(private formBuilder: FormBuilder) { 
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
      directory: this.importForm.get('importDirectory').value,
      database: this.importForm.get('importDatabase').value,
      collection: this.importForm.get('importCollection').value
    };
    this.importFlag = true;
  }

  runAdder() {
    this.adderFlag = true;
    this.adderData = {
      database: this.adderForm.get('adderDatabase').value,
      collection: this.adderForm.get('adderCollection').value,
      keywords: this.adderForm.get('adderKeywords').value
    };
  }

}
