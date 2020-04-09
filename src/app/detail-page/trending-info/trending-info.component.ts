import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-trending-info',
  templateUrl: './trending-info.component.html',
  styleUrls: ['./trending-info.component.css']
})
export class TrendingInfoComponent implements OnInit {

  @Input() commits: [];
  chart = [];

  constructor() { }

  ngOnInit() {

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['2019-09-20', '2019-09-21', '2019-09-22', '2019-09-23', '2019-09-24', '2019-09-25', '2019-09-26'],
        datasets: [
          {
            label: 'My first dataset',
            data: [1,3,5,10,56,65,35,543,543,543],
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



}
