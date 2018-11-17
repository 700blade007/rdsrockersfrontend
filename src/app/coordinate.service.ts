import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coordinate } from './model/coordinate';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {

  constructor(private http: HttpClient) {}

  getCoordinates() {
    return this.http.get<coordinate[]>('http://localhost:8080/getcoordinates');
  }
}
