import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-trending-info',
  templateUrl: './trending-info.component.html',
  styleUrls: ['./trending-info.component.css']
})
export class TrendingInfoComponent implements OnInit {

  chart = [];

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
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
