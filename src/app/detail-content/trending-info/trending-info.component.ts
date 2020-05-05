import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Commit } from 'src/app/shared/models/commit-model';
import { TrendingGraphInfo } from '../detail-content-service';


@Component({
  selector: 'app-trending-info',
  templateUrl: './trending-info.component.html',
  styleUrls: ['./trending-info.component.css']
})
export class TrendingInfoComponent implements OnInit {

  @Input() commits: Commit[];
  @Input() trendingGraphInfo: TrendingGraphInfo;
  chart = [];

  constructor() { }

  ngOnInit() {

    const endOfWeeks = this.trendingGraphInfo.endOfWeeks;
    const historicalCommitCounts = this.trendingGraphInfo.historicalCommitCounts;
    const gaps = this.trendingGraphInfo.gaps;
    
    const predictCommitCounts = this.trendingGraphInfo.predictCommitCounts;

    if (this.trendingGraphInfo.endOfWeeks.length > 0) {
    this.chart = this.createGraph(endOfWeeks, historicalCommitCounts, gaps, predictCommitCounts);
    } else {
      this.trendingGraphInfo = null;
    }
  }

    createGraph(endOfWeeks, historicalCommitCounts, gaps, predictCommitCounts) {
      return new Chart('canvas', {
        type: 'line',
        data: {
          labels: endOfWeeks,
          datasets: [
            {
              label: 'Historical Commit Counts By Weekly',

              data: historicalCommitCounts,
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
          },
          {
            label: 'Predicted Future 5 weeks Commit Counts',
            data: predictCommitCounts,
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
