import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { CoordinateService } from '../coordinate.service'
import { coordinate } from '../model/coordinate';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  title = 'canvasjs-angular';
  dataPoints: coordinate[];
  chartType: string = 'line';
  chartTypes: string[] = [ 'area',
  'bar',
  'column',
  'doughnut',
  'line',
  'pie',
  'spline',
  'splineArea',
  'stackedArea',
  'stackedBar',
  'stackedColumn',
  'stepLine',
  'stepArea',
  'rangeBar',
  'rangeColumn',
  'rangeArea',
  'rangeSplineArea',
  'waterfall' ];

  constructor(private coordinateService: CoordinateService) { }
  
  ngOnInit() {
    this.coordinateService.getCoordinates().subscribe(data => {
      this.dataPoints = data;
      this.renderGraph();
    } );
  }

  renderGraph() {
    console.log(this.dataPoints);
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Basic Column Chart in Angular 6"
      },
      data: [{
        type: this.chartType,
        dataPoints: this.dataPoints
      }]
    });
    chart.render();
  }

  
}