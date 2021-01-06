import { Component, OnInit } from '@angular/core';
import {
  AlertService,
  JobServicesService,
  ProjectServices,
} from '../_services';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
  templateUrl: 'services.detail.component.html',
})
export class ServicesDetailComponent implements OnInit {
  userId: string;
  services = null;
  id: string;
  loading: false;
  imageSrc: string;

  constructor(
    private servicesServices: JobServicesService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const url = window.location.pathname;
    const serviceId = url.substring(url.lastIndexOf('/') + 1);
    this.servicesServices
      .detailServices(serviceId)
      .pipe(first())
      .subscribe((services) => {
        console.log(services.message);
        this.services = services.message;
        const imageId = this.services[0].Image.split('/')[1];
        this.imageSrc = `${environment.apiUrl}/files/ViewLicense/${imageId}`;
        console.log(serviceId);
      });
  }
}
