import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestPrice } from '../_models/request-price';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { detailRequest } from '../_models/detailRequest';

@Injectable({
  providedIn: 'root',
})
export class RequestPriceServices {
  private requestPriceSubject: BehaviorSubject<RequestPrice>;
  public requestPrice: Observable<RequestPrice[]>;
  public detailRequest: BehaviorSubject<detailRequest>;

  constructor(private router: Router, private http: HttpClient) {}

  getRequestPrice(userId: string) {
    return this.http.get<RequestPrice>(
      `${environment.apiUrl}/requestprice/ViewRequestPriceByUserID/${userId}`
    );
  }

  getDetailPriceById(id: string) {
    return this.http.get<detailRequest>(
      `${environment.apiUrl}/requestprice/ViewDetailRequestPrice/${id}`
    );
  }

  batalNegoOwner(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/requestprice/CancelReqPrice99/${id}`,
      {},
      { headers: header }
    );
  }

  batalNegoUser(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/requestprice/CancelReqPrice98/${id}`,
      {},
      { headers: header }
    );
  }

  sepakatNegoOwner(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/requestprice/AccRequestPrice1/${id}`,
      {},
      { headers: header }
    );
  }

  sepakatNegoUser(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/requestprice/AccRequestPrice2/${id}`,
      {},
      { headers: header }
    );
  }

  finnalizeNegoOwner(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/requestprice/AccRequestPrice3/${id}`,
      {},
      { headers: header }
    );
  }

  resetRequestPrice(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/requestprice/resetRequestPrice0/${id}`,
      {},
      { headers: header }
    );
  }

  negoRequestPrice(id: string, price: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/requestprice/NegoRequestPrice/${id}`,
      { price },
      { headers: header }
    );
  }
}
