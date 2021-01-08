import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { AlertService, ProjectServices } from '../_services';
import { Projects } from '../_models/projects';
import { environment } from '@environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['modal-style.css'],
})
export class DetailComponent {
  userId: string;
  projects = null;
  imageSrc: string;

  constructor(
    private projectServices: ProjectServices,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const url = window.location.pathname;
    const projectId = url.substring(url.lastIndexOf('/') + 1);
    this.userId = localStorage.getItem('userid').slice(1, -1);
    this.projectServices
      .detailProject(projectId)
      .pipe(first())
      .subscribe((projects) => {
        this.projects = projects.message;
        console.log((this.projects = projects.message));
        if (this.projects[0].Image != undefined) {
          const imageId = this.projects[0].Image.split('/')[1];
          this.imageSrc = `https://3.208.28.174:3003/files/ViewLicense/${imageId}`;
        }
      });
  }

  takeProject() {
    this.projectServices
      .takeProjects(this.projects[0]._id, 'project')
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          this.router.navigate(['/schedule'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
        },
      });
  }

  negoProject() {
    this.projectServices
      .requestPrice(this.projects[0]._id, 'project')
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          this.router.navigate([`/requestprice`], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
        },
      });
  }
}
