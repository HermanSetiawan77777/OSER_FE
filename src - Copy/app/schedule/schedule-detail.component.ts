import { Component, OnInit } from '@angular/core';
import { AlertService, JobServicesService } from '../_services';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ScheduleServices } from '../_services/schedule.services';

@Component({
  templateUrl: 'schedule-detail.component.html'
})
export class ScheduleDetailComponent implements OnInit{
  userId: string;
  schedules = null;
  id: string;
  loading: false;
  imageSrc: string;


  constructor(
    private scheduleServices: ScheduleServices,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const url = window.location.pathname;
    const scheduleId = url.substring(url.lastIndexOf('/') + 1);
    this.scheduleServices.getScheduleDetail(scheduleId)
      .pipe(first())
      .subscribe(schedules => {
        this.schedules = schedules.message;
        const imageId = this.schedules[0].Image.split('/')[1];
        this.imageSrc = `${environment.apiUrl}/files/ViewLicense/${imageId}`;
        console.log(scheduleId);
      });
  }
}
