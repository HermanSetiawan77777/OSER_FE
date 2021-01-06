import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestPrice } from '../_models/request-price';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestPriceServices{
  private requestPriceSubject: BehaviorSubject<RequestPrice>;
  public requestPrice: Observable<RequestPrice[]>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  getRequestPrice(userId: string) {
    return this.http.get<RequestPrice>(`${environment.apiUrl}/requestprice/ViewRequestPriceByUserID/${userId}`);
  }
}
