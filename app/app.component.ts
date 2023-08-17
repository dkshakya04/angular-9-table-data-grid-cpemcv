import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from './alert-component/alert.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  combinedData: any[] = [];

  constructor() {
    this.combineData();
  }

  json1: any = [
    {
      SSID: 7,
      NAME: '66kV SS-7',
      Cir_Name: 'GJ',
      Div_Name: 'ADI',
      ISACT: true,
      LAT: '23.49213',
      LONG: '72.455771',
      FeederInfo: [
        {
          LID: 11,
          name: '11kV FDR-11',
          ISACT: true,
          ISPDC: false,
        },
        {
          LID: 21,
          name: '11kV FDR-21',
          ISACT: true,
          ISPDC: false,
        },
        {
          LID: 31,
          name: '11kV FDR-31',
          ISACT: true,
          ISPDC: false,
        },
      ],
    },
    {
      SSID: 17,
      NAME: '66kV SS-17',
      Cir_Name: 'GJ',
      Div_Name: 'GND',
      ISACT: true,
      LAT: '23.49213',
      LONG: '72.455771',
      FeederInfo: [
        {
          LID: 12,
          name: '11kV FDR-12',
          ISACT: true,
          ISPDC: false,
        },
        {
          LID: 22,
          name: '11kV FDR-22',
          ISACT: true,
          ISPDC: false,
        },
      ],
    },
    {
      SSID: 27,
      NAME: '66kV SS-27',
      Cir_Name: 'GJ',
      Div_Name: 'KHL',
      ISACT: true,
      LAT: '23.49213',
      LONG: '72.455771',
      FeederInfo: [
        {
          LID: 13,
          name: '11kV FDR-13',
          ISACT: false,
          ISPDC: false,
        },
        {
          LID: 23,
          name: '11kV FDR-23',
          ISACT: true,
          ISPDC: false,
        },
        {
          LID: 33,
          name: '11kV FDR-33',
          ISACT: true,
          ISPDC: false,
        },
      ],
    },
  ];

  json2: any = [
    {
      SSID: '7',
      message: {
        msgts: '2023-08-16 10:11:06',
        levrefid: 7,
        data: [
          ['LID', '11,21,31'],
          ['IR', '1.1,1.3,1.6'],
          ['IB', '1.55,1.12,'],
          ['IY', ',1.53,1.12'],
          ['VR', '6.3313,6.2959,6.2991'],
          ['VY', ',6.2991,6.2959'],
          ['VB', ',6.2842,'],
          ['KWR', '-9.7,-10.1,-7.03'],
          ['KWY', '-9.61,-6.95,'],
          ['KWB', ',-9.7,'],
          ['DTTM', '20230816100500,20230816100700,20230816101000,'],
        ],
      },
    },
    {
      SSID: '17',
      message: {
        msgts: '2023-08-16 10:11:06',
        levrefid: 17,
        data: [
          ['LID', '12,22,32'],
          ['IR', '1.1,1.3,1.6'],
          ['IB', '1.55,1.12,'],
          ['IY', ',1.53,1.12'],
          ['VR', '6.3313,6.2959,6.2991'],
          ['VY', ',6.2991,6.2959'],
          ['VB', ',6.2842,'],
          ['KWR', '-9.7,-10.1,-7.03'],
          ['KWY', '-9.61,-6.95,'],
          ['KWB', ',-9.7,'],
          ['DTTM', '20230817100500,20230817100700,20230817101000,'],
        ],
      },
    },
    {
      SSID: '27',
      message: {
        msgts: '2023-08-16 10:11:06',
        levrefid: 27,
        data: [
          ['LID', '13,23,33'],
          ['IR', '1.1,1.3,1.6'],
          ['IB', '1.55,1.12,'],
          ['IY', ',1.53,1.12'],
          ['VR', ',6.2991,6.2959'],
          ['VY', '6.3313,6.2959,6.2991'],
          ['VB', ',6.2842,'],
          ['KWR', '-9.61,-6.95,'],
          ['KWY', '-9.7,-10.1,-7.03'],
          ['KWB', ',-9.7,'],
          ['DTTM', '20230818100500,20230818100700,20230818101000,'],
        ],
      },
    },
  ];

  ngOnInit(): void {}

  combineData() {
    const combined = this.json1.map((item1) => {
      const item2 = this.json2.find(
        (item) => item.SSID === item1.SSID.toString()
      );
      return {
        SSID: item1.SSID,
        SSName: item1.NAME,
        CircleName: item1.Cir_Name,
        DIVName: item1.Div_Name,
        FeederName: item1.FeederInfo.map((feeder) => feeder.name).join(', '),
        DateTime: item2?.message.msgts || '',
        IR: item2?.message.data[1][1] || '',
        IY: item2?.message.data[3][1] || '',
        IB: item2?.message.data[2][1] || '',
        VR: item2?.message.data[4][1] || '',
        VY: item2?.message.data[5][1] || '',
        VB: item2?.message.data[6][1] || '',
        KWR: item2?.message.data[7][1] || '',
        KWY: item2?.message.data[8][1] || '',
        KWB: item2?.message.data[9][1] || '',
      };
    });

    this.combinedData = combined;
  }
}
