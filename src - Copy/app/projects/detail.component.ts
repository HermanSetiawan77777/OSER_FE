import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { ProjectServices } from '../_services';
import { Projects } from '../_models/projects';
import { environment } from '@environments/environment';

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['modal-style.css'],
})
export class DetailComponent {
  userId: string;
  projects = null;
  imageSrc: string

  constructor(private projectServices: ProjectServices) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const url = window.location.pathname;
    const projectId = url.substring(url.lastIndexOf('/') + 1);
    this.userId = localStorage.getItem('userid').slice(1, -1);
    this.projectServices.detailProject(projectId)
      .pipe(first())
      .subscribe(projects => {
        this.projects = projects.message;
        console.log(this.projects = projects.message)
        const imageId = this.projects[0].Image.split('/')[1];
        this.imageSrc = `${environment.apiUrl}/files/ViewLicense/${imageId}`;
      });
  }
}
