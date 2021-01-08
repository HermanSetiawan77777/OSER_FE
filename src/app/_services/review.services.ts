import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { newReviewModel } from '../_models/newReviewModel';

@Injectable({
  providedIn: 'root',
})
export class ReviewServices {
  constructor(private http: HttpClient) {}

  insertReview(reviewData: newReviewModel) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/review/InsertReview`,
      reviewData,
      { headers: header }
    );
  }

  viewReviewByAssigmnent(id: string) {
    return this.http.get<any>(
      `${environment.apiUrl}/review/ViewReviewyByAssignment/${id}`
    );
  }

  viewReviewByOwner(ownerName: string) {
    return this.http.get<any>(
      `${environment.apiUrl}/ViewReviewyByOwner/${ownerName}`
    );
  }

  updateScheduleReview(id: string, reviewData: any) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/schedule/UpdateScheduleReview/${id}`,
      { reviewData },
      { headers: header }
    );
  }
}
