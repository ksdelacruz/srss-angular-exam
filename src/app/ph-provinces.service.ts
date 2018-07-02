import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhProvince } from './ph-province';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhProvincesService {
  private _url: string = "/assets/data/ph-provinces.json";

  constructor(private http: HttpClient) { }

  getProvinces (): Observable<IPhProvince[]> {
    return this.http.get<IPhProvince[]>(this._url);
  }
}
