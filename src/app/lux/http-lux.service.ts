import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {LuxServiceService} from "./lux-service.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class HttpLuxService implements LuxServiceService {

  private baseUrl = "http://localhost:3000/carsList";

  constructor(private http: Http) {
  }


  getAll():Observable<any> {
    return this.http.get(this.baseUrl)
      .map(response => response.json())
  }


  save(car: any): Observable<any> {
    return this.http.post(this.baseUrl, car)
  }

  update(car: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${car.id}`, car)
  }

  // delete(car: any): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${car.id}`)
  // }

}

