import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChooseColumnComponent } from './choose-column/choose-column.component';
import { UploadModule } from './upload/upload.module';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChooseColumnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
