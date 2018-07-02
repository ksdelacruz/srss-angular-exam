declare var require: any

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Chart, MapChart } from 'angular-highcharts';
import { PhRegionsService } from '../ph-regions.service';

const Highcharts = {maps: {}};
require("../../../js/ph-regions")(Highcharts);

@Component({
  selector: 'app-philippines',
  templateUrl: './philippines.component.html',
  styleUrls: ['./philippines.component.css']
})
export class PhilippinesComponent implements OnInit {
  // public regions = [
  //   ["region-1", 3],
  //   ["region-2", 3],
  //   ["region-3", 3],
  // ];

  public allRegions = [];

  mapSpatial: MapChart;

  constructor(
    private _regionService: PhRegionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._regionService.getRegions()
    .subscribe(data => {
      this.allRegions = data;
      const temp = this.processRegions(data);
      this.mapSpatial = this.getPhilippineMap(temp);
    });
  }

  processRegions (regions) {
    const temp = [];
    regions.forEach(elem => {
      temp.push([elem["hc-key"], 1]);
    });
    return temp;
  }

  getPhilippineMap (regions) {
    return new MapChart({
        chart: {
          map: Highcharts['maps']['ph-regions']
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox'
          }
        },
        colorAxis: {
          min: 0
        },
        legend: {
          enabled: false
        },
        series: [{
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          allAreas: true,
          data: regions
        }]
      });
  }

  onSelectRegion (region) {
    const key = region["hc-key"];
    this.router.navigate(["/region", key]);
  }
}
