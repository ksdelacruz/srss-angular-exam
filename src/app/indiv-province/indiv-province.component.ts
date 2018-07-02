declare var require: any

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Chart, MapChart } from 'angular-highcharts';
import { PhProvincesService } from '../ph-provinces.service';
import { PhCitiesMunService } from '../ph-cities-mun';

const Highcharts = {maps: {}};
require("../../../js/ph-provinces")(Highcharts);

@Component({
  selector: 'app-indiv-province',
  templateUrl: './indiv-province.component.html',
  styleUrls: ['./indiv-province.component.css']
})
export class IndivProvinceComponent implements OnInit {

  public includedCities = [];
  public provinceCode;
  public selectedProvince;
  public regionName;

  mapSpatial: MapChart;

  constructor(
    private _cityMunService: PhCitiesMunService,
    private _provinceService: PhProvincesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.provinceCode = params.get('key');
    });

    this._cityMunService.getCitiesAndMunicipalities()
    .subscribe(data => {
      const temp = this.processCitiesMun(data, this.provinceCode);
      this.includedCities = temp;
    });

    this._provinceService.getProvinces()
    .subscribe(data => {
      const temp = this.processProvince(data, this.provinceCode);
      this.selectedProvince = temp[0].name;
      this.regionName = temp[0].region;
      const param = [temp[0].key, 1];
      this.mapSpatial = this.getPhilippineMap(param);
    });
  }

  getPhilippineMap (province) {
    return new MapChart({
        chart: {
          map: Highcharts['maps']['ph-provinces']
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
          data: [province]
        }]
      });
  }

  processCitiesMun (citiesMun, provinceCode) {
    const temp = citiesMun.filter(elem =>
      provinceCode.toUpperCase() === elem.province
    );
    return temp;
  }

  processProvince (regions, provinceCode) {
    const temp = regions.filter(elem =>
      provinceCode.toUpperCase() === elem.code
    );
    return temp;
  }

}
