import { Component, OnInit, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api-service/api-service.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  collectionList = ['practice', 'Mar_01', 'test'];
  processList = ['Location', 'Language', 'Keyword'];
  analyticsForm;
  analyticsData;
  loading = false;
  chart = null;

  // Practice
  practiceLanguage = {
    title: 'practice Language Analysis',
    type: 'PieChart',
    data: [['English', 11257], ['Spanish', 2739], ['Portugese', 463], ['Undefined', 439],
      ['French', 428], ['Indonesian', 388], ['Turkish', 205], ['Thai', 181], ['Italian', 123],
      ['Catalan', 104], ['German', 99], ['Japanese', 96], ['Hindi', 72], ['Dutch', 44], ['tl', 38],
      ['ar', 34], ['pl', 29], ['ta', 19], ['el', 19], ['zh', 17], ['ko', 14], ['ru', 13], ['mr', 9],
      ['cs', 9], ['da', 8], ['sl', 8], ['ro', 7], ['cy', 5], ['ht', 5], ['eu', 4], ['sv', 4], ['uk', 4],
      ['gu', 4], ['None', 4], ['et', 4], ['iw', 3], ['ur', 3], ['bn', 3], ['kn', 2], ['te', 2],
      ['fi', 2], ['ne', 1], ['am', 1], ['no', 1], ['is', 1]],
    columnNames: ['Language', 'Count'],
    options: {
      pieHole: 0.4,
      sliceVisibilityThreshold: 0.02,
      width: 950,
      height: 500
    }
  };

  practiceLocation = {
    title: 'practice Location Analysis (ignoring Tweets without location data)',
    type: 'PieChart',
    data: [['United States', 39], ['Great Britain', 11], ['Argentina', 5], ['India', 3], ['Spain', 3],
      ['Turkey', 3], ['Columbia', 3], ['Austria', 2], ['Philippines', 2], ['Germany', 2], ['Canada', 2],
      ['Nigeria', 2], ['Chile', 1], ['Mexico', 1], ['GT', 1], ['Japan', 1], ['PK', 1], ['Indonesia', 1],
      ['Brazil', 1], ['Italy', 1], ['TH', 1], ['IL', 1], ['KE', 1], ['ZM', 1], ['IE', 1], ['CU', 1]],
    columnNames: ['Country', 'Count'],
    options: {
      pieHole: 0.4,
      sliceVisibilityThreshold: 0.02,
      width: 950,
      height: 500
    }
  };

  practiceKeyword = {
    title: 'practice Location Analysis (ignoring Tweets without location data)',
    type: 'LineChart',
    data: [['2020/9/17 12:00', 2193, 1576, 1071],
      ['2020/9/17 13:00', 3346, 2754, 1739],
      ['2020/9/15 23:00', 1951, 1876, 2086]],
    columnNames: ['Time', 'Coronavirus', 'Covid-19', 'Covid19'],
    options: {
      width: 950,
      height: 500
    }
  };

  // Mar_01
  marLanguage = {
    title: 'Mar_01 Language Analysis',
    type: 'PieChart',
    data: [['English', 340864], ['Spanish', 78432], ['French', 21678], ['Portugese', 16157],
      ['Thai', 11663], ['Japanese', 11522], ['Undefined', 11069], ['None', 4965], ['Italian', 4457],
      ['Indonesian', 4023], ['Lithuanian', 3877], ['Catalan', 1396], ['German', 1330], ['Dutch', 794],
      ['Korean', 787], ['Chinese', 601], ['Turkish', 563], ['Persian', 458], ['tl', 407], ['ar', 329],
      ['ro', 243], ['ht', 170], ['ru', 168], ['sv', 159], ['pl', 159], ['da', 130], ['hi', 109],
      ['fi', 68], ['et', 65], ['cy', 63], ['ur', 60], ['cs', 57], ['el', 45], ['vi', 41], ['sl', 38],
      ['ne', 27], ['eu', 25], ['no', 24], ['bn', 19], ['lv', 16], ['is', 16], ['ta', 15], ['iw', 9],
      ['hu', 8], ['kn', 6], ['uk', 6], ['mr', 4], ['si', 4], ['or', 2], ['te', 2], ['sr', 1],
      ['ml', 1], ['gu', 1]],
    columnNames: ['Language', 'Count'],
    options: {
      pieHole: 0.4,
      sliceVisibilityThreshold: 0.02,
      width: 950,
      height: 500
    }
  };

  marLocation = {
    title: 'Mar_01 Location Analysis (ignoring Tweets without location data)',
    type: 'PieChart',
    data: [['United States', 1635], ['Mexico', 144], ['Brazil', 137], ['Spain', 113],
      ['Great Britain', 98], ['Ecuador', 96], ['Canada', 89], ['France', 81], ['Dominican Republic', 66],
      ['Argentina', 62], ['Columbia', 56], ['Italy', 49], ['Australia', 41], ['Japan', 33],
      ['Indonesia', 32], ['Nigeria', 27], ['Malaysia', 27], ['Ireland', 26], ['Panama', 26],
      ['Philippines', 23], ['Chile', 22], ['India', 19], ['Peru', 19], ['Thailand', 18], ['Germany', 16],
      ['VE', 13], ['GT', 12], ['ZA', 12], ['KR', 10], ['PT', 10], ['SG', 8], ['CN', 7], ['BE', 7],
      ['TR', 7], ['CR', 7], ['JM', 7], ['TW', 7], ['VN', 6], ['SV', 6], ['PY', 6], ['NZ', 5], ['GH', 5],
      ['UY', 5], ['HN', 4], ['HK', 4], ['CH', 4], ['TT', 4], ['NO', 4], ['RU', 3], ['EG', 3], ['BM', 3],
      ['', 3], ['SA', 3], ['AT', 2], ['FJ', 2], ['AE', 2], ['PK', 2], ['RW', 2], ['NL', 2], ['DZ', 2],
      ['HT', 2], ['KE', 2], ['CD', 1], ['ZM', 1], ['KY', 1], ['SE', 1], ['SN', 1], ['CM', 1], ['IQ', 1],
      ['IM', 1], ['CY', 1], ['LU', 1], ['BH', 1], ['GR', 1], ['BL', 1], ['PF', 1], ['BO', 1], ['LC', 1],
      ['LB', 1], ['BB', 1], ['NI', 1], ['GN', 1], ['MV', 1], ['ZW', 1], ['HU', 1]],
    columnNames: ['Country', 'Count'],
    options: {
      pieHole: 0.4,
      sliceVisibilityThreshold: 0.01,
      width: 950,
      height: 500
    }
  };

  // Test
  testLanguage = {
    title: 'test Language Analysis',
    type: 'PieChart',
    data: [['English', 1386207], ['Spanish', 399335], ['French', 125852], ['Portugese', 61802],
      ['Undefined', 61288], ['None', 44119], ['Italian', 42290], ['Turkish', 18935], ['Catalan', 18265],
      ['Indonesian', 14742], ['German', 12711], ['Thai', 12454], ['Hindi', 8452], ['Dutch', 7950],
      ['Japanese', 7158], ['Arabic', 4352], ['tl', 2718], ['no', 2243], ['ru', 2104], ['ur', 1636],
      ['fa', 1572], ['ro', 1541], ['pl', 1378], ['zh', 1328], ['lt', 1141], ['ht', 984], ['ko', 760],
      ['et', 759], ['sv', 741], ['ta', 732], ['el', 655], ['da', 655], ['fi', 555], ['cs', 462],
      ['uk', 459], ['mr', 429], ['cy', 375], ['lv', 289], ['sl', 263], ['eu', 203], ['te', 141],
      ['vi', 139], ['hu', 111], ['bn', 102], ['iw', 88], ['sr', 83], ['kn', 71], ['gu', 61], ['is', 44],
      ['ml', 40], ['ne', 40], ['bg', 38], ['dv', 29], ['or', 26], ['am', 18], ['si', 18], ['ckb', 10],
      ['my', 10], ['pa', 10], ['ps', 7], ['hy', 6], ['km', 3], ['ka', 2], ['sd', 1]],
    columnNames: ['Language', 'Count'],
    options: {
      pieHole: 0.4,
      sliceVisibilityThreshold: 0.02,
      width: 950,
      height: 500
    }
  };

  testLocation = {
    title: 'test Location Analysis (ignoring Tweets without location data)',
    type: 'PieChart',
    data: [['United States', 6847], ['Great Britain', 1511], ['Brazil', 737], ['Spain', 718],
      ['India', 517], ['Argentina', 507], ['France', 486], ['Canada', 453], ['Mexico', 451],
      ['Italy', 443], ['Nigeria', 371], ['Columbia', 367], ['South Africa', 250], ['Chile', 206],
      ['Turkey', 195], ['Peru', 191], ['Ireland', 144], ['Germany', 141], ['Netherlands', 131],
      ['Ecuador', 112], ['Pakistan', 99], ['Venezuela', 94], ['Australia', 83], ['Dominican Republic', 73],
      ['Kenya', 67], ['Ghana', 65], ['Indonesia', 64], ['Belgium', 63], ['Uruguay', 61],
      ['PH', 54], ['PA', 52], ['PY', 49], ['CR', 47], ['CH', 47], ['AE', 44], ['PT', 42], ['UG', 37],
      ['MY', 36], ['SA', 33], ['AT', 30], ['CM', 29], ['GT', 27], ['NI', 26], ['SE', 26], ['SV', 22],
      ['NZ', 22], ['HN', 21], ['TH', 21], ['LB', 21], ['PL', 20], ['DK', 20], ['SN', 19], ['JM', 19],
      ['NO', 18], ['BO', 18], ['Japan', 17], ['NA', 17], ['CD', 16], ['KW', 16], ['CN', 16], ['RU', 15],
      ['GR', 15], ['QA', 14], ['RS', 14], ['MV', 13], ['', 12], ['BS', 12], ['MA', 12], ['FI', 12],
      ['IL', 12], ['BW', 12], ['ZW', 11], ['TZ', 11], ['EG', 10], ['AO', 10], ['HT', 10], ['CY', 10],
      ['KR', 9], ['RW', 9], ['CU', 9], ['CI', 9], ['TT', 9], ['UA', 9], ['IQ', 8], ['CZ', 8], ['HR', 8],
      ['SG', 7], ['ZM', 7], ['HU', 7], ['AZ', 7], ['DZ', 6], ['GA', 6], ['JO', 6], ['OM', 6], ['GN', 5],
      ['BH', 5], ['GI', 5], ['LK', 5], ['NP', 5], ['MW', 5], ['LS', 4], ['VN', 4], ['TG', 4], ['LV', 4],
      ['XK', 4], ['AG', 4], ['MQ', 4], ['ML', 4], ['SO', 4], ['NE', 3], ['BJ', 3], ['YE', 3], ['SK', 3],
      ['RO', 3], ['GE', 3], ['TW', 3], ['GM', 3], ['BG', 3], ['AF', 3], ['AL', 3], ['BY', 3], ['IR', 3],
      ['MZ', 2], ['SI', 2], ['BD', 2], ['FJ', 2], ['MT', 2], ['IS', 2], ['BA', 2], ['AD', 2], ['AM', 2],
      ['LU', 2], ['SY', 2], ['MK', 2], ['LT', 2], ['DJ', 1], ['ME', 1], ['CG', 1], ['KG', 1], ['PR', 1],
      ['SL', 1], ['VI', 1], ['BB', 1], ['AW', 1], ['BF', 1], ['SZ', 1], ['VU', 1], ['CV', 1], ['GP', 1],
      ['MG', 1], ['HK', 1], ['BZ', 1], ['GQ', 1], ['LR', 1], ['MN', 1], ['YT', 1], ['RE', 1], ['GW', 1],
      ['TD', 1], ['SB', 1], ['TN', 1]],
    columnNames: ['Country', 'Count'],
    options: {
      pieHole: 0.4,
      sliceVisibilityThreshold: 0.01,
      width: 950,
      height: 500
    }
  };

  // Nov Data
  novLanguage = {
    title: 'Nov_18 Language Analysis',
    type: 'PieChart',
    data: [['English', 20417019], ['Spanish', 4890739], ['French', 1160634], ['Portuguese', 935770],
      ['Undefined', 910474], ['German', 360345], ['Italian', 355350], ['Turkish', 337906], ['None', 267406],
      ['Catalan', 196618], ['Dutch', 151782], ['in', 132806], ['Hindi', 93264], ['Japanese', 61121],
      ['Arabic', 52415], ['Thai', 38648], ['Tagalog', 36943], ['Russian', 35477], ['Polish', 32635],
      ['Romanian', 20120], ['Swedish', 16108], ['Urdu', 13964], ['Haitian', 13189], ['el', 11449],
      ['et', 11431], ['zh', 10814], ['da', 10492], ['fa', 9065], ['lt', 8126], ['fi', 8107], ['ta', 8033],
      ['uk', 6972], ['cs', 6923], ['no', 5788], ['cy', 5343], ['ko', 5058], ['sl', 4886], ['mr', 4641],
      ['lv', 4125], ['eu', 3784], ['iw', 2196], ['hu', 2191], ['bn', 1554], ['te', 1543], ['vi', 1403],
      ['sr', 1020], ['gu', 961], ['is', 786], ['kn', 681], ['bg', 624], ['ml', 471], ['or', 403],
      ['ne', 349], ['si', 249], ['ps', 149], ['ckb', 140], ['pa', 131], ['am', 131], ['dv', 129],
      ['my', 71], ['hy', 69], ['sd', 57], ['ka', 25], ['km', 9], ['lo', 6], ['ug', 5], ['bo', 2]],
    columnNames: ['Language', 'Count'],
    options: {
      pieHole: 0.4,
      sliceVisibilityThreshold: 0.01,
      width: 950,
      height: 500
    }
  };

  novLocation = {
    title: 'Nov_18 Location Analysis',
    type: 'PieChart',
    data: [['None', 30450342], ['United States', 92581], ['Great Britain', 22575], ['Brazil', 11011],
      ['Spain', 10088], ['Canda', 7300], ['Argentina', 5829], ['India', 5545], ['Mexico', 5542],
      ['France', 5060], ['Italy', 4062], ['Columbia', 3436], ['Turkey', 3233], ['South Africa', 3189],
      ['Germany', 3189], ['Nigeria', 3174], ['Chile', 2653], ['Netherlands', 2354], ['Ireland', 2075],
      ['Peru', 1548], ['Venezuela', 1433], ['Ecuador', 1199], ['Kenya', 1034], ['Australia', 979],
      ['Belgium', 885], ['Pakistan', 860], ['Uruguay', 812], ['Dominican Republic', 797], ['Indonesia', 751],
      ['PA', 700], ['GH', 698], ['UG', 626], ['PT', 587], ['CH', 585], ['PY', 572], ['CR', 550], ['NZ', 528],
      ['AT', 492], ['AE', 477], ['PL', 461], ['SE', 459], ['PH', 440], ['GT', 435], ['SA', 407], ['SV', 313],
      ['JM', 270], ['MY', 258], ['HN', 257], ['KR', 252], ['JP', 251], ['DK', 248], ['CI', 243], ['IL', 232],
      ['', 222], ['GR', 215], ['FI', 211], ['RU', 198], ['CD', 181], ['NA', 180], ['BW', 179], ['RW', 174],
      ['NO', 173], ['EG', 170], ['BO', 166], ['LB', 163], ['YE', 158], ['MV', 153], ['NI', 151], ['SN', 145],
      ['TT', 143], ['CZ', 125], ['CM', 118], ['QA', 116], ['TH', 110], ['IQ', 99], ['BS', 99], ['TZ', 97],
      ['ZW', 96], ['KW', 95], ['CN', 90], ['ZM', 89], ['RS', 88], ['CY', 85], ['CU', 84], ['HT', 82],
      ['MQ', 81], ['BD', 78], ['MA', 76], ['UA', 73], ['BF', 72], ['LV', 71], ['AF', 71], ['OM', 67],
      ['DZ', 64], ['MW', 62], ['LK', 61], ['MZ', 60], ['SG', 57], ['HR', 53], ['SI', 52], ['IR', 49],
      ['SO', 47], ['XK', 47], ['TN', 47], ['ET', 45], ['LU', 44], ['HU', 42], ['RO', 42], ['BH', 41],
      ['AD', 40], ['AO', 39], ['JO', 38], ['BB', 37], ['LS', 35], ['AZ', 35], ['FJ', 34], ['IM', 34],
      ['TW', 33], ['AM', 33], ['BG', 33], ['NP', 32], ['MT', 31], ['GA', 31], ['ML', 30], ['HK', 30],
      ['AL', 29], ['GP', 29], ['GN', 29], ['SK', 28], ['GI', 24], ['IS', 24], ['BJ', 23], ['MK', 22],
      ['AG', 22], ['GM', 21], ['GE', 21], ['BA', 21], ['SZ', 21], ['CG', 18], ['LC', 17], ['VN', 17],
      ['TD', 17], ['LT', 17], ['BY', 17], ['DJ', 17], ['RE', 16], ['LR', 16], ['CF', 16], ['GF', 15],
      ['ME', 15], ['KZ', 15], ['KY', 14], ['BZ', 14], ['BM', 14], ['NE', 13], ['SY', 12], ['PR', 12],
      ['SL', 11], ['LY', 11], ['TG', 11], ['SR', 11], ['KG', 9], ['EE', 9], ['GD', 9], ['MR', 8],
      ['MU', 8], ['MM', 8], ['PG', 7], ['LI', 7], ['MD', 7], ['VA', 6], ['MC', 6], ['CV', 6], ['AW', 6],
      ['MG', 5], ['UZ', 5], ['YT', 5], ['KM', 5], ['VC', 5], ['NC', 4], ['TC', 4], ['UM', 4], ['GQ', 4],
      ['VI', 4], ['PF', 4], ['VG', 3], ['BT', 3], ['KN', 3], ['GU', 3], ['CW', 3], ['WS', 3], ['TO', 2],
      ['BL', 2], ['GW', 2], ['BI', 2], ['SC', 2], ['FK', 2], ['MN', 1], ['SM', 1], ['ST', 1], ['TJ', 1],
      ['DM', 1], ['AQ', 1], ['SB', 1], ['GY', 1], ['SH', 1], ['VU', 1], ['MP', 1], ['IO', 1], ['SX', 1],
      ['AI', 1], ['KH', 1], ['MF', 1], ['GL', 1], ['MO', 1], ['JE', 1], ['GG', 1], ['AS', 1]],
      columnNames: ['Location', 'Count'],
      options: {
        pieHole: 0.4,
        sliceVisibilityThreshold: 0.01,
        width: 950,
        height: 500
      }
  };

  bidenData = {
    title: 'Biden Tweet Sentiment Classification',
    type: 'Bar',
    data: [['Strongly Negative', 84972, 699409, 2407], ['Negative', 455577, 885233, 374960], ['Neutral', 3870876, 1909813, 3078399], ['Positive', 1577877, 1435788, 2504577], ['Strongly Positive', 313869, 1372928, 342828]],
    columnNames: ['Class', 'Text Blob', 'Vader', 'Transformer'],
    options: {
      chart: {
        title: 'Biden Tweet Sentiment Classification'
      },
      bars: 'vertical',
      width: 1000,
      height: 500
    }
  };

  bloombergData = {
    title: 'Bloomberg Tweet Sentiment Classification',
    type: 'Bar',
    data: [['Strongly Negative', 82579, 686296, 4507], ['Negative', 437595, 986290, 513487], ['Neutral', 3638899, 1890787, 3420050], ['Positive', 1223868, 1177479, 1407684], ['Strongly Positive', 194528, 836617, 231741]],
    columnNames: ['Class', 'Text Blob', 'Vader', 'Transformer'],
    options: {
      chart: {
        title: 'Bloomberg Tweet Sentiment Classification'
      },
      bars: 'vertical',
      width: 1000,
      height: 500
    }
  };

  buttigiegData = {
    title: 'Buttigieg Tweet Sentiment Classification',
    type: 'Bar',
    data: [['Strongly Negative', 35704, 212866, 4292], ['Negative', 175667, 387919, 161929], ['Neutral', 1933175, 1136968, 1375616], ['Positive', 848676, 666945, 1339905], ['Strongly Positive', 146355, 734879, 257835]],
    columnNames: ['Class', 'Text Blob', 'Vader', 'Transformer'],
    options: {
      chart: {
        title: 'Buttigieg Tweet Sentiment Classification'
      },
      bars: 'vertical',
      width: 1000,
      height: 500
    }
  };

  klobucharData = {
    title: 'Klobuchar Tweet Sentiment Classification',
    type: 'Bar',
    data: [['Strongly Negative', 15838, 97827, 0], ['Negative', 76683, 149471, 45982], ['Neutral', 729554, 442654, 569901], ['Positive', 315407, 253921, 537126], ['Strongly Positive', 43501, 237110, 27974]],
    columnNames: ['Class', 'Text Blob', 'Vader', 'Transformer'],
    options: {
      chart: {
        title: 'Klobuchar Tweet Sentiment Classification'
      },
      bars: 'vertical',
      width: 1000,
      height: 500
    }
  };

  sandersData = {
    title: 'Sanders Tweet Sentiment Classification',
    type: 'Bar',
    data: [['Strongly Negative', 238318, 1847734, 2985], ['Negative', 983185, 2282255, 1292848], ['Neutral', 8586193, 4025752, 8095775], ['Positive', 3061178, 2839874, 3717513], ['Strongly Positive', 561037, 2434296, 320790]],
    columnNames: ['Class', 'Text Blob', 'Vader', 'Transformer'],
    options: {
      chart: {
        title: 'Sanders Tweet Sentiment Classification'
      },
      bars: 'vertical',
      width: 1000,
      height: 500
    }
  };

  warrenData = {
    title: 'Warren Tweet Sentiment Classification',
    type: 'Bar',
    data: [['Strongly Negative', 59754, 500592, 218], ['Negative', 300328, 653214, 300343], ['Neutral', 2646144, 1341956, 2286803], ['Positive', 1126888, 909845, 1530128], ['Strongly Positive', 156328, 883835, 171950]],
    columnNames: ['Class', 'Text Blob', 'Vader', 'Transformer'],
    options: {
      chart: {
        title: 'Warren Tweet Sentiment Classification'
      },
      bars: 'vertical',
      width: 1000,
      height: 500
    }
  };

  constructor(private formBuilder: FormBuilder, private apiClient: ApiServiceService) { 
    this.analyticsForm = formBuilder.group({
      analyticsCollection: '',
      analysis: ''
    });
  }

  ngOnInit(): void {
  }

  runAnalytics() {
    this.loading = true;
    this.chart = null;
    this.analyticsData = {
      collection: this.analyticsForm.get('analyticsCollection').value,
      analysis: this.analyticsForm.get('analysis').value
    };
    this.apiClient.startCollection(this.analyticsData)
    let delayTime = 3000;
    if (this.analyticsData.collection == 'Mar_01') {
      delayTime = 8000;
    } else if (this.analyticsData.collection == 'test') {
      delayTime = 25000;
    }
    setTimeout(() => {
      switch (this.analyticsData.collection) {
        case 'practice':
          switch (this.analyticsData.analysis) {
            case 'Language':
              this.chart = this.practiceLanguage;
              break;
            case 'Location':
              this.chart = this.practiceLocation;
              break;
            case "Keyword":
              this.chart = this.practiceKeyword;
              break;
          }
          break;
        case 'Mar_01':
          if (this.analyticsData.analysis == 'Location') {
            this.chart = this.marLocation;
          } else {
            this.chart = this.marLanguage;
          }
          break;
        case 'test':
          if (this.analyticsData.analysis == 'Location') {
            this.chart = this.testLocation;
          } else {
            this.chart = this.testLanguage;
          }
          break;
      }
    }, delayTime);
  }

}