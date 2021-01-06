import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Services } from '../_models/services';
import { Schedule } from '@app/_models/schedule';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class JobServicesService {
  private servicesSubject: BehaviorSubject<Services>;
  public services: Observable<Services[]>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  public get servicesValue(): Services {
    return this.servicesSubject?.value;
  }

  getServices() {
    return this.http.get<Services>(`${environment.apiUrl}/services/ViewServicesListAll`);
  }

  getMyServices(ownerId: string){
    return this.http.get<Services>(`${environment.apiUrl}/Services/ViewServicesListbyOwner/${ownerId}`);
  }

  getById(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1,-1));
    return this.http.get<Services>(`${environment.apiUrl}/services/${id}`, { headers: header });
  }

  takeServices(assignmentid: string, category: string){
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(`${environment.apiUrl}/schedule/InsertSchedule`, {assignmentid, category},
      { headers : header});
  }

  registerServices(services: Services, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('category', services.category);
    formData.append('servicesname', services.servicesname);
    formData.append('price', services.price);
    formData.append('duration', services.duration);
    formData.append('remarks', services.remarks);
    formData.append('uploadedFiles', file, file.name);
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1,-1));
    return this.http.post(`${environment.apiUrl}/services/InsertServices`, formData,
      { headers : header});
  }

  detailServices(id: string) {
    return this.http.get<Services>(`${environment.apiUrl}/Services/ViewServicesDetail/${id}`);
  }

  updateServices(id, services: Services, file: File) {
    const formData = new FormData();
    formData.append('category', services.category);
    formData.append('servicesname', services.servicesname);
    formData.append('price', services.price);
    formData.append('duration', services.duration);
    formData.append('remarks', services.remarks);
    formData.append('uploadedFiles', file, file.name);
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1,-1));
    return this.http.post(`${environment.apiUrl}/services/UpdateServices/${id}`, formData,
      { headers : header});
  }

  deleteServices(id) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1,-1));
    return this.http.delete(`${environment.apiUrl}/services/DeleteServices/${id}`, {headers: header});
      // .pipe(map(x => {
      //   // auto logout if the logged in user deleted their own record
      //   if (id === this.servicesValue.id) {
      //     /*this.logout();*/
      //   }
      //   return x;
      // }));
  }
}
