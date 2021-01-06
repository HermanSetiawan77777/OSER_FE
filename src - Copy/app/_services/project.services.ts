import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { Projects } from '@app/_models/projects';

@Injectable({
  providedIn: 'root'
})

export class ProjectServices{
  private projectSubject: BehaviorSubject<Projects>;
  public project: Observable<Projects[]>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  public get projectValue(): Projects {
    return this.projectSubject.value;
  }

  getProjects() {
    return this.http.get<Projects>(`${environment.apiUrl}/project/ViewProjectAll`);
  }

  getMyProjects(ownerId: string){
    return this.http.get<Projects>(`${environment.apiUrl}/project/ViewProjectByOwner/${ownerId}`);
  }

  getById(id: string) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.get<Projects>(`${environment.apiUrl}/project/${id}`,{ headers: header });
  }

  registerProject(project: Projects, file: File): Observable<any>{
    // tslint:disable-next-line:new-parens
    const formData = new FormData();
    formData.append('category', project.category);
    formData.append('name', project.name);
    formData.append('price', project.price);
    formData.append('deadline', project.deadline);
    formData.append('duration', project.duration);
    formData.append('remarks', project.remarks);
    formData.append('uploadedFiles', file, file.name);
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(`${environment.apiUrl}/project/InsertProject`, formData, { headers: header });
  }

  detailProject(id: string) {
    return this.http.get<Projects>(`${environment.apiUrl}/project/ViewProjectDetail/${id}`);
  }

  takeProjects(assignmentid: string, category: string){
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(`${environment.apiUrl}/schedule/InsertSchedule`, {assignmentid, category},
      { headers : header});
  }

  requestPrice(assignmentid: string, category: string){
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.post(`${environment.apiUrl}/requestprice/InsertRequestPrice`, {assignmentid, category},
      { headers : header});
  }

  updateProject(project: Projects, id, file: File) {
    // tslint:disable-next-line:new-parens
    const form = new FormData;
    const formData = new FormData();
    formData.append('category', project.category);
    formData.append('name', project.name);
    formData.append('price', project.price);
    formData.append('deadline', project.deadline);
    formData.append('duration', project.duration);
    formData.append('remarks', project.remarks);
    formData.append('uploadedFiles', file, file.name);
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1,-1));
    return this.http.post(`${environment.apiUrl}/project/UpdateProject/${id}`, formData, {headers: header});
  }

  deleteProjects(id) {
    let header = new HttpHeaders();
    header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
    return this.http.delete(`${environment.apiUrl}/project/DeleteProject/${id}`, {headers: header});
  }
}
