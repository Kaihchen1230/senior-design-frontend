import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-trending-info',
  templateUrl: './trending-info.component.html',
  styleUrls: ['./trending-info.component.css']
})
export class TrendingInfoComponent implements OnInit {

  @Input() commits: [];
  commitCount: {[ date: string ]: number };
  chart = [];

  constructor() { }

  ngOnInit() {

    this.countCommits();

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: Object.keys(this.commitCount),
        datasets: [
          {
            label: 'My first dataset',
            data: Object.values(this.commitCount),
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Date'
            },
          }],
          yAxes: [ {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Commit Count'
            }
          }],
        },
        title: {
          display: true,
          text: 'Commit History',
          position: 'top'
        },
        legend: {
          display: false
        }
      }
    });
  }

  countCommits() {

    const result = {};
    this.commits.forEach(commit => {

      const mmddyyyy = new Date(commit);
      let month = (mmddyyyy.getMonth() + 1).toString();
      let date = mmddyyyy.getDate().toString();
      const year = mmddyyyy.getFullYear().toString();

      // tslint:disable-next-line: radix
      if (parseInt(month) < 10) {
        month = '0' + month;
      }

      // tslint:disable-next-line: radix
      if (parseInt(date) < 10) {
        date = '0' + date;
      }
      const commitDate = year + '-' + month + '-' + date;

      if (result.hasOwnProperty(commitDate)) {
        result[commitDate] += 1;
      } else {
        result[commitDate] = 0;
      }
    });

    console.log('result: ', result);

    const sortedResult = {};

    Object.keys(result).sort().forEach(key => {
      sortedResult[key] = result[key];
    });

    console.log('this is sorted result: ', sortedResult);
    this.commitCount = sortedResult;
    console.log('commitCOunt: ', this.commitCount['2019-10-14']);
  }



}
