import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhRegion } from './ph-regions';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PhRegionsService {
  private _url: string = "/assets/data/ph-regions.json";

  constructor(private http: HttpClient) { }

  getRegions (): Observable<IPhRegion[]> {
    return this.http.get<IPhRegion[]>(this._url);
  }
}
