import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

interface Commit {
  endOfWeek: string;
  numCommits: number;
}

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

    // this.countCommits();
    console.log('this is commitCount: ', this.commits);
    if (this.commits) {
      let endOfWeeks = [];
      let historicalCommitCounts = [];
      let predictCommitCounts = [];
      let gaps = [];
      this.commits.forEach((commit: Commit, index) => {
        const endOfWeek = commit.endOfWeek;
        const commitCount = commit.numCommits;

        if (index === 4) {
          gaps.push(commitCount);
          historicalCommitCounts.push(NaN);
          predictCommitCounts.push(commitCount);
        } else if (index === 5) {
          gaps.push(commitCount);
          historicalCommitCounts.push(commitCount);
          predictCommitCounts.push(NaN);
        } else if (index < 5) {
          historicalCommitCounts.push(NaN);
          predictCommitCounts.push(commitCount);
          gaps.push(NaN);
        } else {
          historicalCommitCounts.push(commitCount);
          predictCommitCounts.push(NaN);
          gaps.push(NaN);
        }
        endOfWeeks.push(endOfWeek);

      });

      endOfWeeks = endOfWeeks.reverse();
      historicalCommitCounts = historicalCommitCounts.reverse();
      predictCommitCounts = predictCommitCounts.reverse();
      gaps = gaps.reverse();
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: endOfWeeks,
          datasets: [
            {
              label: 'Historical Commit Counts By Weekly',

              data: historicalCommitCounts,
              // pointBackgroundColor: [ "Blue", "Yellow", "Green", "Purple", "Orange"],
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderColor: 'red',
              fill: false,
              cubicInterpolationMode: 'monotone'
          },
          {
            data: gaps,
            label: 'Gap',
            backgroundColor: (context) => {
              let lastHistoricalIndex = 0;
              let firstPredictIndex = 0;
              const dataSet = context.dataset.data;

              dataSet.forEach((commitCount, index) => {
                if (commitCount >= 0) {
                  if (lastHistoricalIndex) {
                    firstPredictIndex = index;
                  } else {
                    lastHistoricalIndex = index;
                  }
                }
              });
              const index = context.dataIndex;
              return index ===  firstPredictIndex ? 'blue' : index === lastHistoricalIndex ? 'red' : 'black';
            },
            borderColor: (context) => {
              let lastHistoricalIndex = NaN;
              let firstPredictIndex = NaN;
              const dataSet = context.dataset.data;

              dataSet.forEach((commitCount: any, index: number) => {
                if (commitCount >= 0) {
                  if (lastHistoricalIndex) {
                  firstPredictIndex = index;
                  } else {
                    lastHistoricalIndex = index;
                  }
                }

              });

              const index = context.dataIndex;
              return index ===  firstPredictIndex ? 'blue' : index === lastHistoricalIndex ? 'red' : 'black';
            },
            borderWidth: 2,
            borderDash: [2, 2],
            fill: false,
            cubicInterpolationMode: 'monotone',
            // pointBackgroundColor:
          },
          {
            label: 'Predicted Future 5 weeks Commit Counts',
            data: predictCommitCounts,
            // pointBackgroundColor: [ "Blue", "Yellow", "Green", "Purple", "Orange"],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'blue',
            fill: false,
            cubicInterpolationMode: 'monotone'
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date of Each Week'
              },
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Commit Count'
              },
              ticks: {
                suggestedMin: 0
              }
            }],
          },
          legend: {
            labels: {
              filter: (item, chart) => {
                return !item.text.includes('Gap');
              }
            }
          },
          tooltips: {
            mode: 'single',
            callbacks: {
                label: (tooltipItems) => {
                  return 'The week of ' + tooltipItems.xLabel + ': ' + tooltipItems.yLabel;
                }
            }
          }
        }
      });

    }

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

    // console.log('result: ', result);

    const sortedResult = {};

    Object.keys(result).sort().forEach(key => {
      sortedResult[key] = result[key];
    });

    console.log('this is sorted result: ', sortedResult);
    this.commitCount = sortedResult;
    console.log('commitCOunt: ', this.commitCount['2019-10-14']);
  }



}
