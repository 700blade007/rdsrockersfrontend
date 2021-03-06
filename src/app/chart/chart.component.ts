import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { CoordinateService } from '../coordinate.service'
import { coordinate } from '../model/coordinate';
import { axis } from '../model/axis';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  title = 'canvasjs-angular';
  dataPoints: coordinate[];
  XColumns: string[];
  YColumns: string[];
  XColumn: string;
  YColumn: string;
  uploadStatus = false;
  showChartTypes: boolean = false;
  chartType: string = 'area';
  funcs = ['sum','avg','min','max'];
  func = 'sum';
  chartTypes: string[] =
    ['area',
      'bar',
      'column',
      'doughnut',
      'line',
      'pie',
      'spline',
      'splineArea',
      'stepLine',
      'stepArea'];

  constructor(private coordinateService: CoordinateService, private communicateService: CommunicateService) { }

  ngOnInit() {
    this.communicateService.cast.subscribe(data => {
      this.uploadStatus = data;
      this.showChartTypes = false;
      this.getXColumnNames();
      this.getYColumnNames();
    });

  }

  renderGraph() {
    console.log(this.dataPoints);
    let chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      panEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ""
      },
      data: [{
        type: this.chartType,
        dataPoints: this.dataPoints
      }]
    });
    chart.render();
  }

  getXColumnNames() {
    this.coordinateService.getXColumnNames().subscribe(data => {
      this.XColumns = data;
      this.XColumn = "";
    });
  }

  getYColumnNames() {
    this.coordinateService.getYColumnNames().subscribe(data => {
      this.YColumns = data;
      this.YColumn = "";
    });
  }

  getCoordinates() {
    this.showChartTypes = true;
    let a = new axis();
    if (typeof this.XColumn == 'undefined' || this.XColumn == "")
      a.xaxis = this.XColumns[0];
    else
      a.xaxis = this.XColumn;
    if (typeof this.YColumn == 'undefined' || this.YColumn == "")
      a.yaxis = this.YColumns[0];
    else
      a.yaxis = this.YColumn;
    a.func = this.func;
    console.log(a);
    this.coordinateService.getCoordinates(a).subscribe(data => {
      this.dataPoints = data;
      this.renderGraph();
    });
  }
}