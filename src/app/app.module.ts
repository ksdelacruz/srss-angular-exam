import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highmaps from 'highcharts/modules/map.src';

import { AppComponent } from './app.component';
import { PhRegionsService } from './ph-regions.service';
import { PhProvincesService } from './ph-provinces.service';
import { PhCitiesMunService } from './ph-cities-mun';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    PhRegionsService,
    PhProvincesService,
    PhCitiesMunService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [highmaps] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }