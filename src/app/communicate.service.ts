import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {

  private uploadStatus = new BehaviorSubject<boolean>(false);
  cast = this.uploadStatus.asObservable();

  constructor() { }

  changeStatus(status: boolean)
  {
    console.log("hi");
    this.uploadStatus.next(status);
    console.log("hi all");
  }
}
