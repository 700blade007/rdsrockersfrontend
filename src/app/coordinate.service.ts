import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coordinate } from './model/coordinate';
import { axis } from './model/axis';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {

  constructor(private http: HttpClient) {}

  getCoordinates(a: axis) {
    return this.http.post<coordinate[]>('http://localhost:8080/getcoordinates',a);
  }

  getXColumnNames() {
    return this.http.get<string[]>('http://localhost:8080/getxcolumnnames');
  }

  getYColumnNames() {
    return this.http.get<string[]>('http://localhost:8080/getycolumnnames');
  }
}
