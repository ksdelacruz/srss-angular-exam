import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhCityMun } from './ph-city-mun';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhCitiesMunService {
  private _url: string = "/assets/data/ph-cities-mun.json";

  constructor(private http: HttpClient) { }

  getCitiesAndMunicipalities (): Observable<IPhCityMun[]> {
    return this.http.get<IPhCityMun[]>(this._url);
  }
}
