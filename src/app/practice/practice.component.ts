import { Component, OnInit, NgZone } from '@angular/core';
import * as FusionCharts from 'fusioncharts';

const schema = require('../../assets/schema.json');
// const practiceData = require('../../assets/practice.json');
// const bidenData = require('../../assets/biden-data.json');
// const bloombergData = require('../../assets/bloomberg-data.json');
// const buttigiegData = require('../../assets/buttigieg-data.json');
const klobucharData = require('../../assets/klobuchar-data.json');
// const sandersData = require('../../assets/sanders-data.json');
// const warrenData = require('../../assets/warren-data.json');

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  dataSource: any;
  type: string;
  width: string;
  height: string;

  constructor() {
    this.type = 'timeseries';
    this.width = '100%';
    this.height = '600';
    this.dataSource = {
      chart: {},
      caption: {
        text: "Klobuchar Sentiment Analysis"
      },
      yaxis: [
        {
          min: "-1",
          max: "1",
          title: "Textblob"
        },
        {
          min: "-1",
          max: "1",
          title: "Vader"
        },
        {
          min: "0",
          max: "1",
          title: "Transformer"
        }
      ],
      xaxis: {
        binning: {
          millisecond: [10, 100]
        }
      }
    };

    this.fetchData();
  }

  fetchData() {
    // var jsonify = res => res.json();
    // var dataFetch = fetch(
    //   "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/ibm-data-data.json"
    // ).then(jsonify);
    // var schemaFetch = fetch(
    //   "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/ibm-data-schema.json"
    // ).then(jsonify);

    // Promise.all([dataFetch, schemaFetch]).then(res => {
    //   const [data, schema] = res;
    //   const fusionDataStore = new FusionCharts.DataStore();
    //   const fusionTable = fusionDataStore.createDataTable(newData, newSchema);
    //   this.dataSource.data = fusionTable;
    // });
    const fusionDataStore = new FusionCharts.DataStore();
    const fusionTable = fusionDataStore.createDataTable(klobucharData, schema);
    this.dataSource.data = fusionTable;
  }

  ngOnInit(): void { }

}