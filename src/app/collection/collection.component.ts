import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api-service/api-service.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collectionForm;
  collectionData;
  pipelineForm;
  pipelineData;
  flag = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiServiceService) { 
    this.collectionForm = this.formBuilder.group({
      keywords: '',
      startDate: '',
      startTime: '',
      duration: '',
      directory: '',
      filename: '',
      summaryFilename: ''
    });

    this.pipelineForm = this.formBuilder.group({
      pipelineKeywords: '',
      pipelineStartDate: '',
      pipelineStartTime: '',
      pipelineDuration: '',
      pipelineDirectory: '',
      pipelineFilename: '',
      pipelineSummaryFilename: '',
      pipelineDatabase: '',
      pipelineCollection: '',
      pipelineLocation: '',
      pipelineLanguage: ''
    });
  }

  ngOnInit(): void {
  }

  newCollection() {
    this.collectionData = {
      keywords: this.collectionForm.get('keywords').value,
      startDate: this.collectionForm.get('startDate').value,
      startTime: this.collectionForm.get('startTime').value,
      duration: this.collectionForm.get('duration').value,
      directory: this.collectionForm.get('directory').value,
      filename: this.collectionForm.get('filename').value,
      summaryFilename: this.collectionForm.get('summaryFilename').value,
    }
    this.apiService.startCollection(this.collectionData);
    this.collectionForm.reset();
  }

  newPipeline() {
    this.pipelineData = {
      keywords: this.pipelineForm.get('pipelineKeywords').value
    }
  }

}
