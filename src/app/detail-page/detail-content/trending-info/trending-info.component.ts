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

    const historyCommitCount = [];
    const preditCommitCount = [];
    const preditTime = Object.values(this.commitCount).length - 3;
    Object.values(this.commitCount).forEach((commitCount, index) => {

      if (index > preditTime) {
        historyCommitCount.push(NaN);
        preditCommitCount.push(commitCount);
      } else if (index === preditTime){
        historyCommitCount.push(commitCount);
        preditCommitCount.push(commitCount);
      } else {
        historyCommitCount.push(commitCount);
        preditCommitCount.push(NaN);
      }
    });

    const date = [];
    Object.keys(this.commitCount).forEach((commitDate, index) => {
      if (index > preditTime) {
        date.push('2020-05-01');
      } else {
        date.push(commitDate);
      }
    });



    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label: 'My first dataset',
            data: historyCommitCount,
            // pointBackgroundColor: [ "Blue", "Yellow", "Green", "Purple", "Orange"],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'red',
            fill: false,
            cubicInterpolationMode: 'monotone'
         },
         {
          label: 'My first dataset',
          data: preditCommitCount,
          // pointBackgroundColor: [ "Blue", "Yellow", "Green", "Purple", "Orange"],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'blue',
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

    // console.log(this.chart.data.datasets[0].backgroundColor);
    // this.chart.data.datasets[0].data = 'black';
    // this.chart.update();
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
