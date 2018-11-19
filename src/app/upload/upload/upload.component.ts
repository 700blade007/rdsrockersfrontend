import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';
import { CommunicateService } from 'src/app/communicate.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(public dialog: MatDialog, public uploadService: UploadService, private communicateService: CommunicateService) {}

  public openUploadDialog() {
    this.communicateService.changeStatus(false);
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }
}