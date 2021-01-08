import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Schedule } from '../_models/schedule';
import { User } from '../_models';
import { Services } from '../_models/services';

@Injectable({
  providedIn: 'root',
})
export class ScheduleServices {
  private scheduleSubject: BehaviorSubject<Schedule>;
  public schedule: Observable<Schedule[]>;

  constructor(private router: Router, private http: HttpClient) {}

  public get scheduleValue(): Schedule {
    return this.scheduleSubject.value;
  }

  getScheduleByUserId(userId: string) {
    return this.http.get<Schedule>(
      `${environment.apiUrl}/schedule/viewSchedulebyUserID/${userId}`
    );
  }

  getScheduleByOwnerId(ownerId: string) {
    return this.http.get<Services>(
      `${environment.apiUrl}/schedule/ViewScheduleyByOwner/${ownerId}`
    );
  }

  getScheduleDetail(id: string) {
    return this.http.get<Services>(
      `${environment.apiUrl}/schedule/ViewScheduleDetail/${id}`
    );
  }

  getById(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.get<Schedule>(`${environment.apiUrl}/schedule/${id}`, {
      headers: header,
    });
  }

  updateScheduleStatus(scheduleId: string, status) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    console.log(localStorage.getItem('token').slice(1, -1));
    return this.http.post(
      `${environment.apiUrl}/schedule/UpdateScheduleStatus/${scheduleId}`,
      { status },
      {
        headers: header,
      }
    );
  }
}
